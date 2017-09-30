/* eslint-disable no-shadow */
const state = {
  formErrorUsername: false,
  formErrorPassword: false,
  formErrorMessage: '',
};

const getters = {
  formErrorUsername: state => state.formErrorUsername,
  formErrorPassword: state => state.formErrorPassword,
  formErrorMessage: state => state.formErrorMessage,
};
/* eslint-disable no-param-reassign */
const mutations = {
  formErrorToggleUsername: (state, boolean) => {
    state.formErrorUsername = boolean;
  },
  formErrorTogglePassword: (state, boolean) => {
    state.formErrorPassword = boolean;
  },
  formErrorSetMessage: (state, message) => {
    state.formErrorMessage = message;
  },
  //
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
