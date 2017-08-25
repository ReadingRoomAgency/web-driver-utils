const webdriver = require('selenium-webdriver');
const elementIsVisible = require('./elementIsVisible');

function eachElementHasElement(
  driver,
  elementsSelector,
  selector,
  elements,
  index) {
  if (elements === undefined) {
    return driver
      .findElements(webdriver.By.css(elementsSelector))
      .then(foundElements => eachElementHasElement(
        driver,
        elementsSelector,
        selector,
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

  return elementIsVisible(elements[index], selector)
    .then(() => eachElementHasElement(
      driver,
      elementsSelector,
      elements,
      selector,
      localIndex + 1
    ));
}

module.exports = eachElementHasElement;
