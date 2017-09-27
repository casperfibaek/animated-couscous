/* eslint-disable console, no-loop-func */
const request = require('request-promise');
const prepare = require('./esaPrepareSearch');
const parse = require('./esaParse');

async function baseSearch(obj, start) {
  try {
    const prepared = await prepare(obj, start);
    const requested = await request(prepared);
    const parsed = await parse(requested);

    return Object.assign({ uri: prepared.uri }, parsed);
  } catch (err) {
    return err;
  }
}

async function getAll(baseObject, firstFinished) {
  if (firstFinished.totalResults < firstFinished.itemsPerPage) {
    return firstFinished;
  }
  const extraPages = Math.floor(
      firstFinished.totalResults / firstFinished.itemsPerPage);
  const copy = Object.assign({}, firstFinished);

  const promises = [];
  for (let i = 1; i < extraPages + 1; i += 1) {
    promises.push(baseSearch(baseObject, 100 * 1));
  }

  return Promise.all(promises)
    .then((allSearchResponses) => {
      allSearchResponses.forEach((searchResponse) => {
        copy.images = copy.images.concat(searchResponse.images);
      });
      return copy;
    })
    .catch(error => error);
}

module.exports = async function search(obj) {
  try {
    const base = await baseSearch(obj);
    return getAll(obj, base);
  } catch (error) {
    return error;
  }
};
