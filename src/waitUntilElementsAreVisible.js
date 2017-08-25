const webdriver = require('selenium-webdriver');
const until = require('selenium-webdriver/lib/until');
module.exports = (driver, selector, waitTime = 2000) => new Promise((resolve, reject) => {
  const locator = selector.startsWith('#')
    ? webdriver.By.id(selector.slice(1))
    : webdriver.By.css(selector);
  driver.wait(
    until.elementsLocated(locator),
    waitTime,
    `cannot locate elements ${selector}`).then(() => {
    driver.findElements(locator)
      .then((els) => {
        resolve(els);
      })
      .catch(e => reject(e))
    }).catch(e => reject(e))
});