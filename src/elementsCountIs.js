const assert = require('assert');
const waitUntilElementsAreVisible = require('./waitUntilElementsAreVisible');

module.exports = (driver, selector, count) =>
  waitUntilElementsAreVisible(driver, selector)
    .then((elements) => {
      assert.equal(elements.length, count);
      return elements;
    });
