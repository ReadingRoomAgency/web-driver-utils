const elementIsVisible = require('./elementIsVisible');
const elementIsLocated = require('./elementIsLocated');

module.exports = (driver, selector) =>
  elementIsLocated(driver, selector)
  .then(() => elementIsVisible(driver, selector));
