module.exports = time => new Promise((resolve) => {
  setTimeout(() => resolve(true), time);
});
