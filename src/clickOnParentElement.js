const constants = require('./constants');
const waitUntilElementVisible = require('./waitUntilElementVisible');

module.exports = (driver, selector) =>
  waitUntilElementVisible(
    driver,
    selector)
    .then(option =>
      driver
        .executeScript(constants.PARENT_NODE, option)
        .then(parent => parent.click()));
