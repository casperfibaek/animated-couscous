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
        Name: 'Copenhagen',
        Satellite: 'S1',
        Latest: '01-09-2017',
        Start: '15-07-2017',
      },
      {
        Name: 'Amsterdam',
        Satellite: 'S1',
        Latest: '24-08-2017',
        Start: '07-06-2017',
      },
      {
        Name: 'Oxford',
        Satellite: 'S2',
        Latest: '28-08-2017',
        Start: '23-07-2017',
      },
    ],
  },
  created() {
    const vm = this;
    window.addEventListener('mouseup', (e) => {
      let clickedClass;
      if (vm.menuOpen) {
        clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass.indexOf('base') !== -1) {
          vm.menuOpen = false;
        }
        if (clickedClass && clickedClass.indexOf('main') !== -1) {
          vm.menuOpen = false;
        }
      }

      if (vm.settingsOpen) {
        clickedClass = e.target.getAttribute('class');
        if (clickedClass && clickedClass === 'modal-overlay') {
          vm.settingsOpen = false;
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
        Name: 'Carlsbad',
        Satellite: 'S1',
        Latest: '30-08-2017',
        Start: '15-09-2017',
      });
    },
    sortTable: function sortTable(event) {
      const target = event.target.attributes;
      const reference = target.reference.nodeValue;
      const sorted = target.sorted.nodeValue;

      if (sorted === 'none' || sorted === 'down') {
        event.target.attributes.sorted.nodeValue = 'up';
        this.monitoring.sort((a, b) => {
          if (reference === 'Name') {
            if (a.Name > b.Name) { return 1; }
            if (a.Name === b.Name) { return 0; }
            return -1;
          }
          if (reference === 'Satellite') {
            if (a.Satellite > b.Satellite) { return 1; }
            if (a.Satellite === b.Satellite) { return 0; }
            return -1;
          }
        });
      } else {
        event.target.attributes.sorted.nodeValue = 'down';
        this.monitoring.sort((a, b) => {
          if (reference === 'Name') {
            if (a.Name < b.Name) { return 1; }
            if (a.Name === b.Name) { return 0; }
            return -1;
          }
          if (reference === 'Satellite') {
            if (a.Satellite < b.Satellite) { return 1; }
            if (a.Satellite === b.Satellite) { return 0; }
            return -1;
          }
        });
      }
    },
    closeProgramme: function closeProgramme() {
      app.quit();
    },
  },
});
