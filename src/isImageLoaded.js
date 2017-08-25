const { assert } = require('chai');
const webdriver = require('selenium-webdriver');
const { IS_IMAGE_LOADED } = require('./constants')

module.exports = (driver, selector) =>
  new Promise((resolve, reject) =>
    driver
      .findElement(webdriver.By.css(selector))
      .then((el) => {
        driver.executeScript(IS_IMAGE_LOADED, el)
          .then((res) => {
            assert.isTrue(res);
            resolve(res);
          })
          .catch(e => reject(e));
      })
      .catch(e => reject(e)));