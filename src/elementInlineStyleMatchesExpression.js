const getElementInlineStyles = require('./getElementInlineStyles');
const { assert } = require('chai');

module.exports = (driver, selector, property, expression) =>
  getElementInlineStyles(driver, selector)
    .then((inlineStyles) => {
      assert.isTrue(expression(inlineStyles[property]));
    });