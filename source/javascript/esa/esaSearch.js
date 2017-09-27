/* eslint-disable console, no-loop-func */
const request = require('request-promise');
const prepare = require('./esaPrepareSearch');
const parse = require('./esaParse');

function baseSearch(obj) {
  return new Promise((resolve, reject) => {
    prepare(obj).then((prepared) => {
      request(prepared).then((esaResponse) => {
        parse(esaResponse).then((parsed) => {
          resolve(parsed);
        }).catch((error) => { reject(Error(error)); });
      }).catch((error) => { reject(Error(error)); });
    }).catch((error) => { reject(Error(error)); });
  });
}

function getAll(baseObject, firstFinished) {
  return new Promise((resolve, reject) => {
    if (firstFinished.totalResults < firstFinished.itemsPerPage) {
      resolve(firstFinished);
    }
    const extraPages = Math.floor(
      firstFinished.totalResults / firstFinished.itemsPerPage);
    const baseObjectCopy = Object.assign({}, baseObject);
    const firstFinishedCopy = Object.assign({}, firstFinished);

    let completed = 0;

    for (let i = 1; i < extraPages + 1; i += 1) {
      baseObjectCopy.start = 100 * i;

      baseSearch(baseObjectCopy)
        .then((parsed) => {
          completed += 1;
          firstFinishedCopy.images = firstFinishedCopy.images.concat(parsed.images);
          if (completed === extraPages) {
            firstFinishedCopy.itemsPerPage = firstFinished.totalResults;
            resolve(firstFinishedCopy);
          }
        })
        .catch((error) => {
          reject(Error(error));
        });
    }
  });
}

module.exports = function search(obj) {
  return new Promise((resolve, reject) => {
    baseSearch(obj)
      .then((parsed) => {
        getAll(obj, parsed)
          .then((combined) => { resolve(combined); })
          .catch((error) => { reject(Error(error)); });
      })
      .catch((error) => { reject(Error(error)); });
  });
};
