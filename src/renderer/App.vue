<template>
  <div id="app">
    <windowFrame></windowFrame>
    <div class="placeholder"></div>
    <div id="content">
      <sidebar v-if="credentials.username || !loginStatus"></sidebar>
      <!-- <sidebar v-if="credentials.username"></sidebar> -->
      <div id="main-window">
        <modals></modals>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  #content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #main-window {
    width: 100%;
    margin: 20px;
  }

  .placeholder {
    height: 32px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 100%;
    margin: 0px;
  }
</style>

<script>
  import './assets/javascript/leaflet';
  import './assets/javascript/leaflet.pm.min';
  import './assets/javascript/leaflet.imageOverlay.rotated';
  import windowFrame from './components/windowFrame.vue';
  import modals from './components/modals.vue';
  import sidebar from './components/sidebar.vue';

  export default {
    name: 'migrate-vue',
    components: {
      windowFrame,
      sidebar,
      modals,
    },
    computed: {
      credentials() { return this.$store.getters.getCredentials; },
      loginStatus() { return this.$store.getters.getLoginStatus; },
    },
  };
</script>

<style>
  @import url('./assets/stylesheets/leaflet.css');
  @import url('./assets/stylesheets/leaflet.pm.css');
  @import url('./assets/stylesheets/spectre.min.css');
  @import url('./assets/stylesheets/fontello.css');
  @import url('./assets/stylesheets/base.css');
</style>
