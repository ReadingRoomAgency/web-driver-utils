module.exports = (flags, options) =>
  Promise.all(
    flags.map((flag, index) => {
      const [title, acronym] = options.rawTable[index];
      return new Promise((resolve, reject) => {

        const getAttribute = new Promise((res, rej) => {
          flag.getAttribute('title').then((value) => {
            if (title === value) {
              res();
            }
            rej(`${title} !== ${value}`);
          });
        });

        const getAcronym = new Promise((res, rej) => {
          flag.getText().then((value) => {
            if (acronym === value) {
              res();
            }
            rej(`${acronym} !== ${value}`);
          });
        });

        Promise.all([
          getAttribute,
          getAcronym,
        ]).then(() => resolve()).catch(e => reject(e));
      });
    }));