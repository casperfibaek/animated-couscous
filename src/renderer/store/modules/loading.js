/* eslint-disable no-shadow, no-console */
// import db from '../../database';

const state = {
  loadingMessage: 'placeholder',
  currentlyLoading: false,
};

const getters = {
  loadingMessage: state => state.loadingMessage,
  currentlyLoading: state => state.currentlyLoading,
};
/* eslint-disable no-param-reassign */
const mutations = {
  setCurrentlyLoading: (state, boolean) => {
    state.currentlyLoading = boolean;
  },
  setLoadingMessage: (state, string) => {
    state.loadingMessage = string;
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
};
