function script(selector) {
  return `
    document.querySelector('${selector}').scrollIntoView();
  `;
}

module.exports = (driver, selector) =>
  driver.executeScript(script(selector)).then(() => {
    setTimeout(() => true, 100);
  });
