const webdriver = require('selenium-webdriver');
const assert = require('assert');

module.exports = (driver, selector) =>
  driver.findElement(webdriver.By.css(selector))
    .then(element => element.isDisplayed())
    .then(isVisible => assert.equal(isVisible, true));
