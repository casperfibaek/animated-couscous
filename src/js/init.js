/* eslint-env browser, node */
/* eslint-disable no-unused-vars, no-new, no-console */
/* globals Vue */

const helpers = require('./helpers.js');
const remote = require('electron').remote;

const app = remote.app;
const shell = remote.shell;

const vue = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    formError: {
      username: false,
      password: false,
    },
    credentials: {
      name: null,
      password: null,
    },
    menuOpen: false,
    settingsOpen: false,
    monitoring: [
      {
        name: 'Copenhagen',
        satellite: 'S1',
        latest: '01-09-2017',
        start: '15-07-2017',
      },
      {
        name: 'Amsterdam',
        satellite: 'S1',
        latest: '24-08-2017',
        start: '07-06-2017',
      },
      {
        name: 'Oxford',
        satellite: 'S2',
        latest: '28-08-2017',
        start: '23-07-2017',
      },
    ],
  },
  created() {
    const vm = this;
    window.addEventListener('mouseup', (e) => {
      if (vm.menuOpen) {
        const clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass.indexOf('base') !== -1) {
          vm.menuOpen = false;
        }
        if (clickedClass && clickedClass.indexOf('main') !== -1) {
          vm.menuOpen = false;
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
        this.loggedIn = true;
        this.credentials = credentials;
        this.formError = {
          username: false,
          password: false,
        };
      }
    },
    logout: function logout() {
      this.credentials = {};
      this.loggedIn = false;
      this.closeMenu();
    },
    toggleMenu: function toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleSettings: function toggleSettings() {
      this.settingsOpen = !this.settingsOpen;
    },
    closeMenu: function closeMenu() {
      if (this.menuOpen) { this.menuOpen = !this.menuOpen; }
    },
    openFilesystem: function openFilesystem() {
      shell.showItemInFolder('C:/');
    },
    createNew: function createNew() {
      console.log('hello!');
      this.monitoring.push({
        name: 'Carlsbad',
        satellite: 'S1',
        latest: '30-08-2017',
        start: '15-09-2017',
      });
    },
    closeProgramme: function closeProgramme() {
      app.quit();
    },
  },
});
