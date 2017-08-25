module.exports = (start, end) =>
  // eslint-disable-next-line no-mixed-operators
  Array(end - start + 1).fill().map((x, idx) => start + idx)