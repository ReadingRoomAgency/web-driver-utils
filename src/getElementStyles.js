const styleParser = require('style-parser');
const webdriver = require('selenium-webdriver');

module.exports = (element) => {
  return new Promise((resolve, reject) => {
    element.getAttribute('style')
      .then(style => resolve(styleParser(style)))
      .catch((e) => {
        reject(e);
      });
  });
}