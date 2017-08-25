const webdriver = require('selenium-webdriver');
const until = require('selenium-webdriver/lib/until');
module.exports = (driver, selector, waitTime = 2000) => new Promise((resolve, reject) => {
  const locator = selector.startsWith('#')
    ? webdriver.By.id(selector.slice(1))
    : webdriver.By.css(selector);
  driver.wait(
    until.elementLocated(locator),
    waitTime,
    `cannot locate element ${selector}`).then(() => {
    driver.findElement(locator).then((el) => {
      driver.wait(
        until.elementIsVisible(el),
        waitTime,
        `cannot see element ${selector}`)
        .then(() => {
          resolve(el);
        })
        .catch((e) => reject(e))
    }).catch((e) => reject(e))
  });
});