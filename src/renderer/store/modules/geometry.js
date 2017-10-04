/* eslint-disable no-shadow, no-console */
const state = {
  geometryAdded: false,
  geometry: null,
};

const getters = {
  geometryAdded: state => state.geometryAdded,
  geometry: state => state.geometry,
};
/* eslint-disable no-param-reassign */
const mutations = {
  setGeometryAdded: (state, boolean) => {
    state.geometryAdded = boolean;
  },
  setGeometry: (state, obj) => {
    state.geometry = obj;
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
};
