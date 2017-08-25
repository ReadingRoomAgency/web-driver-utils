const assert = require('assert');

module.exports = (driver, expected) =>
  driver
    .getTitle()
    .then(title => assert.equal(expected, title));
