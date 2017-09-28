const request = require('request-promise');
const prepare = require('./esaPrepareSearch');
const parse = require('./esaParse');

async function baseSearch(obj, start) {
  try {
    const prepared = prepare(obj, start);
    const requested = await request(prepared);
    const parsed = parse(requested);

    const copy = Object.assign({}, parsed);
    copy.uri = prepared.uri;

    return copy;
  } catch (err) {
    return err;
  }
}

async function getAll(baseObject, firstFinished) {
  const copy = Object.assign({}, firstFinished);
  if (firstFinished.totalResults < firstFinished.itemsPerPage) {
    delete copy.itemsPerPage;
    delete copy.startIndex;
    delete copy.totalResults;
    return copy;
  }
  const extraPages = Math.floor(
      firstFinished.totalResults / firstFinished.itemsPerPage);

  try {
    const promises = [];
    for (let i = 1; i < extraPages + 1; i += 1) {
      promises.push(baseSearch(baseObject, 100 * 1));
    }

    const all = await Promise.all(promises);
    for (let v = 0; v < all.length; v += 1) {
      copy.images = copy.images.concat(all[v].images);
    }
    delete copy.itemsPerPage;
    delete copy.startIndex;
    delete copy.totalResults;

    return copy;
  } catch (error) {
    return error;
  }
}

module.exports = async function search(obj) {
  try {
    const base = await baseSearch(obj);
    const all = await getAll(obj, base);
    const test = async _all => _all;
    return test(all);
  } catch (error) {
    return error;
  }
};
