const getElementInlineStyles = require('./getElementInlineStyles');
const assert = require('assert');

module.exports = (driver, selector, property, value) =>
  getElementInlineStyles(driver, selector)
    .then((inlineStyles) => {
      assert.equal(inlineStyles[property], value);
    });