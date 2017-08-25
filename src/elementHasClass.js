const assert = require('assert');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, expected) =>
    driver
      .findElement(webdriver.By.css(selector))
      .getAttribute('class')
      .then(classes => assert(classes.includes(expected)));
