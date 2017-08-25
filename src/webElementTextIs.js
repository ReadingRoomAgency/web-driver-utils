const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (element, expected, selector) => {
  if (selector) {
    return element
      .findElement(webdriver.By.css(selector))
      .getText()
      .then(text => assert.isTrue(text.includes(expected), `${text} !includes ${expected}`))
  } else {
    return element
      .getText()
      .then(text => assert.isTrue(text.includes(expected), `${text} !includes ${expected}`))
  }
}
