// filename.js
const fs = require('fs').promises;
const path = require('path');

const fileName = {
  logoIdentifier: async function () {
    return new Promise(async (resolve, reject) => {
      const directory = path.join(__dirname, 'Examples');

      try {
        const files = await fs.readdir(directory);
        const myFileName = `logo${files.length}.svg`;
        const filePath = path.join(directory, myFileName);
        resolve(filePath);
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = fileName;