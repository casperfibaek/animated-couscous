/* eslint-disable no-shadow */
import sorts from '../../assets/javascript/sorts';

const state = {
  sites: [],
  clickedSite: null,
  images: [],
  clickedImage: null,
};

const getters = {
  getSites: state => state.sites,
  getClickedSite: state => state.clickedSite,
  getImages: state => state.images,
  getClickedImage: state => state.clickedImage,
};

/* eslint-disable no-param-reassign */
const mutations = {
  addSite: (state, site) => {
    state.sites.push(site);
  },
  addClickedSite: (state, site) => {
    state.clickedSite = site;
  },
  addImage: (state, image) => {
    state.images.push(image);
  },
  addClickedImage: (state, image) => {
    state.clickedImage = image;
  },
  clearSites: (state) => {
    state.sites = [];
  },
  clearClickedSite: (state) => {
    state.clickedSite = null;
  },
  clearImages: (state) => {
    state.images = [];
  },
  clearClickedImage: (state) => {
    state.clickedImage = null;
  },
  dynamicSortAlphabetic: (state, options) => {
    state[options.array].sort(sorts.alphabetic(options.reference, options.direction));
  },
  dynamicSortNumbers: (state, options) => {
    state[options.array].sort(sorts.numbers(options.reference, options.direction));
  },
  dynamicSortArray: (state, options) => {
    state[options.array].sort(sorts.array(options.reference, options.direction));
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
};
