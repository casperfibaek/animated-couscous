/* eslint-disable no-shadow, no-console */
const state = {
  credentials: {
    Username: '',
    Firstname: '',
    LastName: '',
    Password: '',
    Country: '',
  },
};

const getters = {
  credentials: state => state.credentials,
};
/* eslint-disable no-param-reassign */
const mutations = {
  setCredentials: (state, credentials) => {
    state.credentials = credentials;
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
