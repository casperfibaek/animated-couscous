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
  dynamicSortAlphabetic: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortAlphabetic(
      options.reference, options.direction));
  },
  dynamicSortDates: (state, options = {}) => {
    state.sites.sort(utils.dynamicSortDates(
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
