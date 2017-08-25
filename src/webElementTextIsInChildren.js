const webdriver = require('selenium-webdriver');
const { assert } = require('chai');
const { INNER_TEXT } = require('./constants');

module.exports = (driver, element, expected, selector) => {
  if (selector) {
    return element
      .findElement(webdriver.By.css(selector))
      .then(x => driver.executeScript(INNER_TEXT, x))
      .then(text => assert.isTrue(text.includes(expected), `${text} !includes ${expected}`));
  } else {
    return driver.executeScript(INNER_TEXT, element)
      .then(text => assert.isTrue(text.includes(expected), `${text} !includes ${expected}`));
  }
}