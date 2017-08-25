const { assert } = require('chai');
const webdriver = require('selenium-webdriver');

module.exports = (element, selector) => {
  if (selector) {
    return element
      .findElement(webdriver.By.css(selector))
      .getText()
      .then(text => assert.isNotEmpty(text, `${text} !empty`))
  } else {
    return element
      .getText()
      .then(text => {
        assert.isNotEmpty(text, `${text} !empty`)
      }
      )
  }
}
