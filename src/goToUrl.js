const getPage = require('../getPage');

module.exports = (driver, url) =>
  driver
    .get(getPage(url));
