const getElementStyle = require('./getElementStyles');
const webdriver = require('selenium-webdriver');

module.exports = (driver, selector) => {
  return new Promise((resolve, reject) => {
    driver.findElement(webdriver.By.css(selector))
      .then(element => resolve(getElementStyle(element)))
      .catch((e) => {
        reject(e);
      })
  });
}