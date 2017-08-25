const webdriver = require('selenium-webdriver');
const { assert } = require('chai');

module.exports = (el, attribute, value, selector) => {
  if (selector) {
    return el
      .findElement(webdriver.By.css(selector))
      .then(element =>
        element
          .getAttribute(attribute)
          .then(x => assert.isTrue(x === value, `${x} !== ${value}`)))
  } else {
    return el
      .getAttribute(attribute)
      .then(x => assert.isTrue(x === value, `${x} !== ${value}`))
  }
};
