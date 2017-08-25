const webdriver = require('selenium-webdriver');
const { assert } = require('chai');
const { INNER_TEXT } = require('./constants');

module.exports = (driver, selector, expected) =>
  driver
    .findElement(webdriver.By.css(selector))
    .then(x => driver.executeScript(INNER_TEXT, x))
    .then(text =>
      assert.isTrue(text.includes(expected), `${text} !includes ${expected}`));