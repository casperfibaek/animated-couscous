/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import sorts from '../assets/javascript/utils/sorts';
import baseCredentials from '../assets/javascript/utils/baseCredentials';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    credentials: baseCredentials,
    loginStatus: false,
    databaseStatus: false,

    sites: [],
    images: [],

    clickedSite: null,
    clickedImage: null,

    modal_settings: false,
    modal_createGeometry: false,

    geometryStatus: false,
    geometry: null,

    formErrorUsernameStatus: false,
    formErrorPasswordStatus: false,
    formErrorMessage: '',

    errorStatus: false,
    errorMessage: '',

    loadingStatus: false,
    loadingMessage: '',
  },
  getters: {
    getSites: state => state.sites,
    getImages: state => state.images,
    getClickedSite: state => state.clickedSite,
    getClickedImage: state => state.clickedImage,

    getModal_settings: state => state.modal_settings,
    getModal_createGeometry: state => state.modal_createGeometry,

    getCredentials: state => state.credentials,
    getLoginStatus: state => state.loginStatus,
    getDatabaseStatus: state => state.databaseStatus,

    getGeometry: state => state.geometry,
    getGeometryStatus: state => state.geometryStatus,

    getFormErrorUsernameStatus: state => state.formErrorUsernameStatus,
    getFormErrorPasswordStatus: state => state.formErrorPasswordStatus,
    getFormErrorMessage: state => state.formErrorMessage,

    getErrorMessage: state => state.errorMessage,
    getErrorStatus: state => state.errorStatus,

    getLoadingMessage: state => state.loadingMessage,
    getLoadingStatus: state => state.loadingStatus,
  },
  mutations: {
    addSite: (state, site) => { state.sites.push(site); },
    setSites: (state, sites) => { state.sites = sites; },
    addImage: (state, image) => { state.images.push(image); },
    setImages: (state, images) => { state.images = images; },
    clearSites: (state) => { state.sites = []; },
    clearImages: (state) => { state.images = []; },

    setClickedSite: (state, site) => { state.clickedSite = site; },
    setClickedImage: (state, image) => { state.clickedImage = image; },
    clearClickedSite: (state) => { state.clickedSite = null; },
    clearClickedImage: (state) => { state.clickedImage = null; },

    setModal: (state, options) => { (state[`modal_${options.modal}`] = options.status); },

    setCredentials: (state, credentials) => { state.credentials = credentials; },
    clearCredentials: (state) => { state.credentials = baseCredentials; },

    setLoginStatus: (state, bool) => { state.loginStatus = bool; },
    setDatabaseStatus: (state, bool) => { state.databaseStatus = bool; },

    setGeometryStatus: (state, bool) => { state.geometryStatus = bool; },
    setGeometry: (state, geojson) => { state.geometry = geojson; },
    clearGeometry: (state) => { state.geometry = null; },

    setFormErrorUsernameStatus: (state, bool) => { state.formErrorUsernameStatus = bool; },
    setFormErrorPasswordStatus: (state, bool) => { state.formErrorPasswordStatus = bool; },
    setFormErrorSetMessage: (state, string) => { state.formErrorMessage = string; },

    setErrorStatus: (state, bool) => { state.errorStatus = bool; },
    setErrorMessage: (state, string) => { state.errorMessage = string; },

    setLoadingStatus: (state, bool) => { state.loadingStatus = bool; },
    setLoadingMessage: (state, string) => { state.loadingMessage = string; },

    dynamicSort: (state, options) => {
      if (options.type === 'string') {
        state[options.array].sort(sorts.alphabetic(options.reference, options.direction));
      }
      if (options.type === 'numbers') {
        state[options.array].sort(sorts.numbers(options.reference, options.direction));
      }
      if (options.type === 'array') {
        state[options.array].sort(sorts.array(options.reference, options.direction));
      }
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});
