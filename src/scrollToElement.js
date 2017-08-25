function script(selector) {
  return `
    var element = document.querySelector('${selector}');
    document.body.scrollTop = element.offsetTop;
  `;
}

module.exports = (driver, selector) =>
  driver.executeScript(script(selector));
