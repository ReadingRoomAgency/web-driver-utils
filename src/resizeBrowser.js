// const [width, height] = dimensions;
module.exports = (driver, dimensions) =>
  driver.manage().window().setSize(...dimensions);
