const webdriver = require('selenium-webdriver');
const assert = require('assert');

module.exports = (driver, selector, callback) => driver
  .findElements(webdriver.By.css(selector))
  .then((elements) => {
    if (elements.length === 0) {
      if (callback) {
        callback(true);
      }

      return true;
    }

    return elements[0].isDisplayed()
      .then((isVisible) => {
        if (callback) {
          return callback(!isVisible);
        }

        return assert.equal(isVisible, false);
      });
  });
