<template>
  <div id="app">
    <windowFrame></windowFrame>
    <div id="content">
      <modals></modals>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  /* eslint-env browser */
  import './assets/javascript/leaflet';
  import './assets/javascript/leaflet.pm.min';
  import './assets/javascript/leaflet.imageOverlay.rotated';
  import windowFrame from './components/windowFrame.vue';
  import modals from './components/modals.vue';

  export default {
    name: 'migrate-vue',
    components: {
      windowFrame,
      modals,
    },
  };
</script>

<style>
  @import url('./assets/stylesheets/leaflet.css');
  @import url('./assets/stylesheets/leaflet.pm.css');
  @import url('./assets/stylesheets/spectre.min.css');
  @import url('./assets/stylesheets/font-awesome.min.css');
  @import url('./assets/stylesheets/base.css');
</style>
