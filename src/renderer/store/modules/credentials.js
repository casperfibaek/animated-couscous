/* eslint-disable no-shadow, no-console */
const baseCredentials = {
  username: '',
  password: '',
  email: '',
  country: '',
  domain: '',
  firstname: '',
  lastname: '',
  lastLogin: '',
  userID: '',
};

const state = {
  credentials: baseCredentials,
  isLoggedIn: true, // change to false in dev
};

const getters = {
  credentials: state => state.credentials,
  isLoggedIn: state => state.isLoggedIn,
};
/* eslint-disable no-param-reassign */
const mutations = {
  setCredentials: (state, credentials) => {
    state.credentials = credentials;
  },
  clearCredentials: (state) => {
    state.credentials = baseCredentials;
  },
  setLoggedIn: (state, boolean = true) => {
    state.isLoggedIn = boolean;
  },
};

export default {
  state,
  getters,
  mutations,
};
