const assert = require('assert');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, attribute, expected) =>
    driver
      .findElement(webdriver.By.css(selector))
      .getAttribute(attribute)
      .then(value => assert.equal(expected, value));
