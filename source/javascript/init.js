/* eslint-env browser, node */
/* eslint-disable no-unused-vars, no-new, no-console */
/* globals Vue */

const helpers = require('./helpers.js');
const remote = require('electron').remote;

const app = remote.app;
const shell = remote.shell;

window.vue = new Vue({ // eslint-disable-line
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
      sites: true,
      menu: false,
      settings: false,
      createSite: false,
      createGeometry: false,
    },
    lists: {
      sites: [],
    },
  },
  created() {
    const vm = this;
    window.addEventListener('mouseup', (e) => {
      let clickedClass;
      if (vm.pages.menu) {
        clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass.indexOf('base') !== -1) {
          vm.pages.menu = false;
        }
        if (clickedClass && clickedClass.indexOf('main') !== -1) {
          vm.pages.menu = false;
        }
      }

      if (vm.pages.settings) {
        clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass === 'modal-overlay') {
          vm.pages.settings = false;
        }
      }
    });
  },
  methods: {
    login: function login() {
      const credentials = helpers.getCredentials('loginForm');
      console.log(credentials);

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
    toggleMenu: function toggleMenu() {
      this.pages.menu = !this.pages.menu;
    },
    toggleSettings: function toggleSettings() {
      this.pages.settings = !this.pages.settings;
    },
    closeMenu: function closeMenu() {
      if (this.pages.menu) { this.pages.menu = !this.pages.menu; }
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
          this.lists.sites.sort(helpers.dynamicSortAlphabetic(reference));
        } else if (reference === 'Latest' || reference === 'Start') {
          this.lists.sites.sort(helpers.dynamicSortDates(reference));
        }
      } else {
        event.target.attributes.sorted.nodeValue = 'down'; // eslint-disable-line
        if (reference === 'Name' || reference === 'Satellite') {
          this.lists.sites.sort(helpers.dynamicSortAlphabetic(reference, -1));
        } else if (reference === 'Latest' || reference === 'Start') {
          this.lists.sites.sort(helpers.dynamicSortDates(reference, -1));
        }
      }
    },
    goto: function goto(str) {
      Object.keys(this.pages).forEach((key) => {
        this.pages[key] = false;
      });
      this.pages[str] = true;
    },
    gotoModal: function gotoModal(str) {
      //
    },
    closeProgramme: function closeProgramme() {
      app.quit();
    },
  },
});

const database = require('../storage/db.js');
