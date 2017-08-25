const webdriver = require('selenium-webdriver');
const elementHasCssValue = require('./elementHasCssValue');

function eachElementHasCssValue(
  driver,
  elementsSelector,
  prop,
  value,
  elements,
  index) {
  if (elements === undefined) {
    return driver
      .findElements(webdriver.By.css(elementsSelector))
      .then(foundElements => eachElementHasCssValue(
        driver,
        elementsSelector,
        prop,
        value,
        foundElements,
        index
      ));
  }

  let localIndex = index;

  if (localIndex === undefined) {
    localIndex = 0;
  }

  if (!elements[index]) {
    return true;
  }

  return elementHasCssValue(elements[index], null, prop, value)
    .then(() => eachElementHasCssValue(
      driver,
      elementsSelector,
      prop,
      value,
      elements,
      localIndex + 1
    ));
}

module.exports = eachElementHasCssValue;
