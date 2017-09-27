/* eslint-env browser, node */
/* eslint-disable no-new, no-unused-vars */
/* globals Vue */

const utils = require('./utils.js');
const remote = require('electron').remote;

const app = remote.app;
const shell = remote.shell;

window.vue = new Vue({
  el: '#app',
  data: {
    formError: {
      username: false,
      password: false,
    },
    error: {
      flag: false,
      message: '',
    },
    credentials: {
      name: null,
      password: null,
    },
    pages: {
      login: false,
      sites: false,
      createSite_S1: true,
      createSite_S2: false,
    },
    modals: {
      menu: false,
      settings: false,
      createGeometry: false,
      satelliteSelect: false,
    },
    toggles: {
      advanced_s1: false,
    },
    lists: {
      sites: [],
    },
  },
  created() {
    const vm = this;
    window.addEventListener('mouseup', (e) => {
      let clickedClass;

      if (vm.pages.login) {
        clickedClass = e.target.getAttribute('class');
        if (
          (clickedClass && clickedClass.indexOf('base') !== -1) ||
          (clickedClass && clickedClass.indexOf('main') !== -1)
        ) {
          const username = document.getElementsByClassName('username-input')[0];
          if (username.value.length < 5) { username.focus(); } else {
            const password = document.getElementsByClassName('password-input')[0];
            if (password.value.length < 5) { password.focus(); }
          }
        }
      }
      if (vm.modals.menu) {
        clickedClass = e.target.getAttribute('class');
        if (
          (clickedClass && clickedClass.indexOf('base') !== -1) ||
          (clickedClass && clickedClass.indexOf('main') !== -1)
        ) {
          vm.modals.menu = false;
        }
      }

      if (vm.modals.settings) {
        clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass === 'modal-overlay') {
          vm.modals.settings = false;
        }
      }
    });
  },
  methods: {
    login: function login() {
      const credentials = utils.getCredentials('loginForm');

      if (credentials.username.length < 4) {
        this.formError.username = 'Login must have at least 4 characters';
        this.formError.password = false;
      } else if (credentials.password.length < 4) {
        this.formError.username = false;
        this.formError.password = 'Password must have at least 4 characters';
      } else {
        this.pages.login = false;
        this.pages.sites = true;
        this.credentials = credentials;
        this.formError = {
          username: false,
          password: false,
        };
      }
    },
    logout: function logout() {
      this.credentials = {};
      this.goto('login');
    },
    openFilesystem: function openFilesystem() {
      shell.showItemInFolder('C:/');
    },
    sortTable: function sortTable(event) {
      const target = event.target.attributes;
      const reference = target.reference.nodeValue;
      const sorted = target.sorted.nodeValue;

      if (sorted === 'down') {
        event.target.attributes.sorted.nodeValue = 'up'; // eslint-disable-line
        if (reference === 'Name' || reference === 'Satellite') {
          this.lists.sites.sort(utils.dynamicSortAlphabetic(reference));
        } else if (reference === 'Latest' || reference === 'Start') {
          this.lists.sites.sort(utils.dynamicSortDates(reference));
        }
      } else {
        event.target.attributes.sorted.nodeValue = 'down'; // eslint-disable-line
        if (reference === 'Name' || reference === 'Satellite') {
          this.lists.sites.sort(utils.dynamicSortAlphabetic(reference, -1));
        } else if (reference === 'Latest' || reference === 'Start') {
          this.lists.sites.sort(utils.dynamicSortDates(reference, -1));
        }
      }
    },
    goto: function goto(str) {
      Object.keys(this.pages).forEach((key) => {
        this.pages[key] = false;
      });
      this.pages[str] = true;
    },
    toggleModal: function openModal(str) {
      this.modals[str] = !this.modals[str];
    },
    toggle: function toggles(str) {
      this.toggles[str] = !this.toggles[str];
    },
    closeProgramme: function closeProgramme() {
      app.quit();
    },
  },
});

// const database = require('../storage/db.js');
const esa = require('./esa/esa.js');
// const maps = require('./maps/maps.js');
