/* eslint-disable no-shadow */
const utils = require('../../assets/javascript/utils');

const state = {
  sites: [],
};

const getters = {
  sites: state => state.sites,
};
/* eslint-disable no-param-reassign */
const mutations = {
  addSite: (state, site) => {
    state.sites.push(site);
  },
  clearSites: (state) => {
    state.sites = [];
  },
  dynamicSortAlphabetic: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortAlphabetic(
      options.reference, options.direction));
  },
  dynamicSortDates: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortDates(
      options.reference, options.direction));
  },
  dynamicSortNumbers: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortNumbers(
      options.reference, options.direction));
  },
  dynamicSortArray: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortArray(
      options.reference, options.direction));
  },
};
/* eslint-enable no-param-reassign */

// const actions = {
//   someAsyncTask({ commit }) {
//     // do something async
//     commit('INCREMENT_MAIN_COUNTER');
//   },
// };

export default {
  state,
  getters,
  mutations,
  // actions,
};
