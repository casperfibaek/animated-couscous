<template>
  <div id="app">
    <modals></modals>
    <router-view></router-view>
  </div>
</template>

<script>
  import modals from './components/modals';
  // import esa from './assets/javascript/esa/esa';

  export default {
    name: 'migrate-vue',
    components: {
      modals,
    },
    created() {
      const vm = this;
      window.addEventListener('mouseup', (e) => {
        vm.$store.commit('classEventListener', {
          class: e.target.getAttribute('class'),
          id: e.target.getAttribute('id'),
        });
      });
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
