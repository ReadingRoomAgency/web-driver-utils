const webdriver = require('selenium-webdriver');
const until = require('selenium-webdriver/lib/until');
const scrollToElement = require('./scrollToElement');

function click(element, skipTimeout = false) {
  return new Promise((resolve, reject) => {
    element
      .click()
      .then(() => {
        if (!skipTimeout) {
          return setTimeout(() => resolve(), 250);
        }

        return resolve();
      })
      .catch(reject);
  });
}

module.exports = (driver, selector, skipTimeout = false) =>
  driver.wait(until.elementLocated(webdriver.By.css(selector)), 2000).then(
    element =>
      new Promise((resolve, reject) => {
        click(element, skipTimeout)
          .then(resolve)
          .catch((e) => {
            if (
              e &&
              e.message &&
              e.message.includes('Element is not clickable at point')
            ) {
              scrollToElement(driver, selector)
                .then(() => click(element, skipTimeout))
                .then(resolve)
                .catch(reject);
            } else {
              reject(e);
            }
          });
      })
  );
