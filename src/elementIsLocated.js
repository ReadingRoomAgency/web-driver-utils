const webdriver = require('selenium-webdriver');
const until = require('selenium-webdriver/lib/until');

module.exports = (driver, selector) =>
  driver.wait(until.elementLocated(webdriver.By.css(selector)), 2000);
