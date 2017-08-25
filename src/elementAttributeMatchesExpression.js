const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, property, expression) =>
  driver.findElement(webdriver.By.css(selector))
    .then((x) => {
      x.getAttribute(property).then((y) => {
      assert.isTrue(expression(y));
  });
});