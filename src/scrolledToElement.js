const assert = require('assert');

function script(selector) {
  return `
    var element = document.querySelector('${selector}');
    return document.body.scrollTop - element.offsetTop;
  `;
}

module.exports = (driver, selector) =>
  driver
  .executeScript(script(selector))
  .then(scrollOffset => assert.equal(scrollOffset, 0));
