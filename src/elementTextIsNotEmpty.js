const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector) =>
    driver
      .findElement(webdriver.By.css(selector))
      .getText()
      .then(text => assert.isNotEmpty(text, `text: ${text} !empty ${selector}`));
