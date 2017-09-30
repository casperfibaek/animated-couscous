<template>
  <div class="modals">
    <menuButton v-if="!modalsMenu"></menuButton>
    <userMenu v-if="modalsMenu"></userMenu>
    <settings v-if="modalsSettings"></settings>
    <errorToast v-if="modalsError"></errorToast>
    <!-- <createGeometry></createGeometry> -->
  </div>
</template>

<script>
  import menuButton from './modals/menuButton'
  import userMenu from './modals/userMenu';
  import settings from './modals/settings';
  import errorToast from './modals/errorToast';
  // import createGeometry from './components/modals/createGeometry';

  // import esa from './assets/javascript/esa/esa';

  export default {
    name: 'migrate-vue',
    components: {
      menuButton,
      userMenu,
      settings,
      errorToast,
      // createGeometry,
    },
    computed: {
      modalsMenu: function() { return this.$store.getters.modalsMenu; },
      modalsSettings: function() { return this.$store.getters.modalsSettings; },
      modalsError: function() { return this.$store.getters.errorStatus; }
    },
  };
</script>
