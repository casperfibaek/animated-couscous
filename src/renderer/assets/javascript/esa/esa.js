import search from './esaSearch';
import testSearches from './esaTestSearch';

export default (async () => {
  const d1 = await Promise.all([
    search(testSearches.s1),
    search(testSearches.s2),
  ]);
  d1.forEach(i => console.log(i)); // eslint-disable-line
})();
