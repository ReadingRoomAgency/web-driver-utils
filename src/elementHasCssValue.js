const assert = require('assert');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, prop, value) => {
  let element;

  if (selector) {
    element = driver.findElement(webdriver.By.css(selector));
  } else {
    element = driver;
  }

  return element
    .getAttribute('style')
    .then((style) => {
      const replace = `${prop}: (.*)(?=;)`;
      const re = new RegExp(replace, 'g');
      const match = re.exec(style);
      assert.equal(match[1], value);
    });
};
