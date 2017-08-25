const { IS_IMAGE_LOADED } = require('./constants');
const webdriver = require('selenium-webdriver');
const { assert } = require('chai');

module.exports = (driver, element, selector) => {
  if (selector) {
    return element
      .findElement(webdriver.By.css(selector))
      .then(el =>
        driver
          .executeScript(IS_IMAGE_LOADED, el)
          .then(res =>
            assert.isTrue(res, `Image is not loaded ${selector}`))
      );
  } else {
    return driver
      .executeScript(IS_IMAGE_LOADED, element)
      .then(res => assert.isTrue(res, 'Image is not loaded'))
  }
}
