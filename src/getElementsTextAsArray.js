const webdriver = require('selenium-webdriver');

function getElementText(elements, iterator, textArray) {
  if (!elements[iterator]) {
    return textArray;
  }

  return elements[iterator].getText()
    .then((text) => {
      const arr = Object.assign([], textArray);
      arr.push(text);

      return getElementText(elements, iterator + 1, arr);
    });
}

module.exports = (driver, selector) =>
  driver
    .findElements(webdriver.By.css(selector))
    .then(elements => getElementText(elements, 0, []));
