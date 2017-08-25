const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, expected) =>
  driver
    .findElement(webdriver.By.css(selector))
    .getText()
    .then(text => assert.isTrue(text.includes(expected), `${text} !includes ${expected}`));
