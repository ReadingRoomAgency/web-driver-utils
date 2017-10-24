const input = require('selenium-webdriver/lib/input');
const webdriver = require('selenium-webdriver');

const clearText = (element) => {
  element.sendKeys(`${input.Key.CONTROL} a`);
  element.sendKeys(input.Key.DELETE);
  return true;
};

module.exports = (driver, element, selector) => {
  if (selector) {
    return driver.findElement(webdriver.By.css(selector))
      .then(el => clearText(el));
  }
  return clearText(element);
};
