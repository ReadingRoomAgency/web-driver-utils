const elementIsNotVisible = require('./elementIsNotVisible');

module.exports = (driver, selector, givenTimeout) => {
  let timeout = givenTimeout;

  if (!timeout) {
    timeout = 5000;
  }

  let time = 0;
  const intervalStep = 500;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (time > timeout) {
        clearInterval(interval);
        reject('Element was still present until the timeout ended');
      } else {
        elementIsNotVisible(driver, selector, (success) => {
          if (success) {
            clearInterval(interval);
            resolve();
          }
        });
      }

      time += intervalStep;
    }, intervalStep);
  });
};
