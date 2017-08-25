module.exports = (string) =>
  // eslint-disable-next-line no-useless-escape
  parseInt(string.replace(/[^-\d\.]/g, ''), 10)

