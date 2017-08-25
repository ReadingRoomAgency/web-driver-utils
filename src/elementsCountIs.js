const assert = require('assert');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, count) =>
  driver
    .findElements(webdriver.By.css(selector))
    .then((elements) => {
      assert.equal(elements.length, count);
      return elements;
    });
