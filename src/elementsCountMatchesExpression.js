const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, expression) =>
  driver
    .findElements(webdriver.By.css(selector))
    .then((elements) => {
      assert.equal(expression(elements.length), true);
      return elements;
    });
