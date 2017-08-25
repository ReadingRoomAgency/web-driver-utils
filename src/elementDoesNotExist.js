const assert = require('assert');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector) =>
  driver
    .findElements(webdriver.By.css(selector))
    .then(elements => assert.equal(0, elements.length));
