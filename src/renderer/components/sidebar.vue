<template>
  <div id="sidebar">

    <div class="sidebar-header">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">
              <i class="icon-user-circle-o" aria-hidden="true"></i>
              <span>{{ credentials.firstname }} {{ credentials.lastname }}</span>
            </div>
            <div class="card-subtitle text-gray">{{ credentials.domain }}</div>
          </div>
          <div class="card-body">
            <span>In the sidepanel you will find your currently monitored sites.</span>
          </div>
          <div class="card-footer">
            <button v-on:click="logout()" class="btn btn-secondary float-left">
              <i class="icon-login" aria-hidden="true"></i>
              <span>Sign out</span>
            </button>
            <button v-on:click="setModal({ modal: 'settings', status: true });" class="btn btn-primary float-right">
              <i class="icon-cog" aria-hidden="true"></i>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      <div class="sidebar-body">
        <div v-if="sites.length === 0" class="empty sidebar-nosite-notification">
          <span>You currently do not have any sites.</span>
          </br>
          </br>
          <router-link :to="{ path: '/createSentinel' }">
            <button class="btn btn-secondary">
              <i class="icon-plus" aria-hidden="true"></i>
              <span class="padding-right">Create new</span>
            </button>
          </router-link>
        </div>
        <div v-else class="sidebar-sites">
          <h5 class="text-center margin-top">Current sites</h5>
          <ul class="sidebar-sitelist">
            <li class='sidebar-site sidebar-element' v-for='(site, index) in sites' v-on:click="clickSite" v-bind:siteid="site.siteID" v-bind:class="{ selected: index === 0}" v-bind:key="index">
              <span>{{ site.sitename }}</span>
            </li>
            <li class="sidebar-element bottom">
              <router-link :to="{ path: '/createSentinel' }">
                <button class="btn btn-secondary">
                  <i class="icon-plus" aria-hidden="true"></i>
                  <span class="padding-right">Create New</span>
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-footer">
      </div>

    </div>
  </div>
</template>

<style>
  #sidebar{
    height: 100%;
    min-width: 300px;
    max-width: 360px;
    width: 30%;
    background: #fff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidebar-header{
    order: 0;
    width: 100%;
  }

  .sidebar-body{
    order: 1;
    height: 100%;
    width: 100%;
  }

  .sidebar-sitelist{
    list-style: none;
  }

  .sidebar-element{
    transition: box-shadow 0.2s;
    height: 36px;
    margin-right: 20px;
    padding-top: 6px;
  }

  .sidebar-element.bottom{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sidebar-site{
    background: #f2f1ec;
    cursor: pointer;
    border: 1px solid #d2d2d2;
  }

  .sidebar-site.selected{
    background: #92c3d8 !important;
    font-weight: 600;
  }

  .sidebar-site:hover{
    background: #e7e5dc;
  }

  .sidebar-site > span {
    margin-left: 10px;
  }

  .sidebar-footer{
    order: 2;
    align-self: flex-end;
    height: 130px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sidebar-header > .card {
    border: none;
    border-bottom: 1px solid #d2d2d2;
  }

  .sidebar-header > .card > .card-body {
    margin-bottom: 24px;
  }
</style>

<script>
/* eslint-env browser, node, es6 */
/* eslint-disable no-console */
// import DB from '../assets/javascript/database';
import getClickedID from '../assets/javascript/utils/getClickedID';
import findInArray from '../assets/javascript/utils/findInArray';

export default {
  name: 'sidebar',
  async mounted() {
    //
  },
  computed: {
    credentials() { return this.$store.getters.getCredentials; },
    loginStatus() { return this.$store.getters.getLoginStatus; },
    sites() { return this.$store.getters.getSites; },
    clickedSite() { return this.$store.getters.getClickedSite; },
  },
  watch: {
    // loginStatus(status) {
    //   if (status === true) {
    //     if (this.sites.length !== 0) {
    //       console.log(this.sites);
    //     }
    //   }
    // },
  },
  methods: {
    setModal(options) { this.$store.commit('setModal', options); },
    setLoginStatus(bool) { this.$store.commit('setLoginStatus', bool); },
    setClickedSite(site) { this.$store.commit('setClickedSite', site); },
    clearSites() { this.$store.commit('clearSites'); },
    clearCredentials() { this.$store.commit('clearCredentials'); },
    route(page) { this.$router.push({ path: page }); },

    clickSite(event) {
      const listSites = document.getElementsByClassName('sidebar-site');
      for (let i = 0; i < listSites.length; i += 1) {
        listSites[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
      const siteID = getClickedID(event, 'siteid');
      const clicked = findInArray(this.sites, { siteID });
      this.setClickedSite(clicked);
    },
    logout() {
      this.clearSites();
      this.setLoginStatus(false);
      this.clearCredentials();
      this.route('loginPage');
    },
  },
};
</script>
