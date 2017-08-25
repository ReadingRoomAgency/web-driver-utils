module.exports = (dataTable) => {
  const clone = dataTable.rawTable.slice(0);
  const properties = clone.splice(0,1)[0];
  return clone.map((row) => {
    const rowHash = {};
    properties.forEach((prop, index) => {
      rowHash[prop] = row[index];
    });
    return rowHash;
  });
};