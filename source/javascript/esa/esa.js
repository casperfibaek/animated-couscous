/* eslint-env es6, node, browser */
/* eslint-disable no-console */

const search = require('./esaSearch');
const testSearches = require('./esaTestSearch');

search(testSearches.s1)
  .then((res1) => {
    console.log(res1);
  });

search(testSearches.s2)
  .then((res2) => {
    console.log(res2);
  });
