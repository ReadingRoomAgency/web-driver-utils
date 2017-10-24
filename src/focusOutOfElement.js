const BLUR_ELEMENT = require('./constants').BLUR_ELEMENT;
const webdriver = require('selenium-webdriver');

module.exports = (driver, element, selector) => {
  if (selector) {
    return driver.findElement(webdriver.By.css(selector))
      .then(el => driver.executeScript(BLUR_ELEMENT, el));
  }
  return driver.executeScript(BLUR_ELEMENT, element);
};
