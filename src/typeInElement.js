const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, keys) =>
    driver
      .findElement(webdriver.By.css(selector))
      .sendKeys(keys);
