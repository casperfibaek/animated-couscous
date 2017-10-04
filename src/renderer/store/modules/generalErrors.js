/* eslint-disable no-shadow */
const state = {
  errorStatus: false,
  errorMessage: '',
};

const getters = {
  errorStatus: state => state.errorStatus,
  errorMessage: state => state.errorMessage,
};
/* eslint-disable no-param-reassign */
const mutations = {
  errorStatusToggleOn: (state) => {
    state.errorStatus = true;
  },
  errorStatusToggleOff: (state) => {
    state.errorStatus = false;
  },
  errorSetMessage: (state, message) => {
    state.errorMessage = message;
  },
};

export default {
  state,
  getters,
  mutations,
  // actions,
};
