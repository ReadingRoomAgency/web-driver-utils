const assert = require('assert');
const _ = require('lodash');
const { GET_COMPUTED_STYLE } = require('./constants');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector, expected) =>
  driver
    .findElement(webdriver.By.css(selector))
    .then(el =>
      Object.keys(expected).forEach((prop) => {
        driver.executeScript(GET_COMPUTED_STYLE, el, prop).then(value => {
          return assert(expected[prop] === value)
        })
      })
    );