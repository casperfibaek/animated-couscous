<template>
  <div id="app">
    <modals></modals>
    <router-view></router-view>
  </div>
</template>

<script>
  /* eslint-env browser */
  import './assets/javascript/leaflet';
  import './assets/javascript/leaflet.pm.min';
  import './assets/javascript/leaflet.imageOverlay.rotated';
  import modals from './components/modals.vue';

  export default {
    name: 'migrate-vue',
    components: {
      modals,
    },
  };
</script>

<style>
  @import url('./assets/stylesheets/leaflet.css');
  @import url('./assets/stylesheets/leaflet.pm.css');
  @import url('./assets/stylesheets/spectre.min.css');
  @import url('./assets/stylesheets/spectre-icons.min.css');
  @import url('./assets/stylesheets/custom.css');
</style>
