const getElementStyles = require('./getElementStyles');
const assert = require('assert');

module.exports = (element, property, value) =>
  getElementStyles(element)
    .then((inlineStyles) => {
      assert.equal(inlineStyles[property], value);
    });