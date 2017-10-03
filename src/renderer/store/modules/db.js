/* eslint-disable no-shadow, no-console */
// import db from '../../database';

const state = {
  dbInitalized: false,
};

const getters = {
  dbInitalized: state => state.dbInitalized,
};
/* eslint-disable no-param-reassign */
const mutations = {
  setDbInitialized: (state, boolean) => {
    state.dbInitalized = boolean;
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
};
