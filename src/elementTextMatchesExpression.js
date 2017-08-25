const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, expression) =>
  driver.findElement(webdriver.By.css(selector))
    .getText().then((y) => {
      assert.isTrue(expression(y));
});