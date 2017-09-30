/* eslint-disable no-shadow */
const state = {
  modalsMenu: false,
  modalsSettings: false,
};

const getters = {
  modalsMenu: state => state.modalsMenu,
  modalsSettings: state => state.modalsSettings,
};
/* eslint-disable no-param-reassign */
const mutations = {
  toggleModal: (state, n) => {
    (state[n] = !state[n]);
  },
  classEventListener: (state, clicked) => {
    if (clicked.class === 'modal-overlay') {
      state.modalsSettings = false;
    } else if (
      state.modalsMenu === true && (
        clicked.id === 'app' || (
          clicked.class !== null &&
          clicked.class.indexOf('base') !== -1
        )
      )
    ) {
      state.modalsMenu = false;
    }
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
