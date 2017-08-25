const webdriver = require('selenium-webdriver');
const until = require('selenium-webdriver/lib/until');

module.exports = (driver, selector, skipTimeout = false) =>
  driver
    .wait(until.elementLocated(webdriver.By.css(selector)), 2000)
    .click().then(() => {
    if (!skipTimeout) {
      return new Promise(resolve => {
        setTimeout(() => resolve(), 250)
      })
    } else {
      return true;
    }
  });
