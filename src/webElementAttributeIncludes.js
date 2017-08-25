const { assert } = require('chai');

module.exports = (el, attribute, value) =>
  el.getAttribute(attribute).then((x) => {
   return  assert.isTrue(x.includes(value), `${x} !includes ${value}`);
});
