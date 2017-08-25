const webdriver = require('selenium-webdriver');

module.exports = (driver, selector) => new Promise((resolve) => {
  const interval = setInterval(() => {
    driver
      .findElements(webdriver.By.css(selector))
      .then((elements) => {
        if (elements.length === 0) {
          resolve();
          clearInterval(interval);
        }
      });
  }, 200);
});
