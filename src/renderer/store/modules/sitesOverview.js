/* eslint-disable no-shadow */
import sorts from '../../assets/javascript/sorts';

const state = {
  sites: [],
};

const getters = {
  getSites: state => state.sites,
};

/* eslint-disable no-param-reassign */
const mutations = {
  addSite: (state, site) => {
    state.sites.push(site);
  },
  clearSites: (state) => {
    state.sites = [];
  },
  dynamicSortAlphabetic: (state, options) => {
    state.sites.sort(sorts.alphabetic(options.reference, options.direction));
  },
  dynamicSortNumbers: (state, options) => {
    state.sites.sort(sorts.numbers(options.reference, options.direction));
  },
  dynamicSortArray: (state, options) => {
    state.sites.sort(sorts.array(options.reference, options.direction));
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
};
