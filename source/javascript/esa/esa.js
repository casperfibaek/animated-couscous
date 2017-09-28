/* eslint-env es6, node, browser */
/* eslint-disable no-console */

const search = require('./esaSearch');
const testSearches = require('./esaTestSearch');

(async () => {
  const d1 = await Promise.all([
    search(testSearches.s1),
    search(testSearches.s2),
  ]);
  console.log(d1);
})();
