<template>
  <div class="modals">
    <menuButton v-if="!modalsMenu && isLoggedIn"></menuButton>
    <userMenu v-if="modalsMenu"></userMenu>
    <settings v-if="modalsSettings"></settings>
    <errorToast v-if="modalsError"></errorToast>
    <loading v-if="currentlyLoading"></loading>
    <createGeometry v-if="modalsCreateGeometry"></createGeometry>
  </div>
</template>

<script>
  import menuButton from './modals/menuButton'
  import userMenu from './modals/userMenu';
  import settings from './modals/settings';
  import errorToast from './modals/errorToast';
  import loading from './modals/loading';
  import createGeometry from './modals/createGeometry';

  export default {
    name: 'migrate-vue',
    components: {
      menuButton,
      userMenu,
      settings,
      errorToast,
      loading,
      createGeometry,
    },
    computed: {
      isLoggedIn: function() { return this.$store.getters.isLoggedIn; },
      modalsMenu: function() { return this.$store.getters.modalsMenu; },
      modalsSettings: function() { return this.$store.getters.modalsSettings; },
      modalsCreateGeometry: function() {
        return this.$store.getters.modalsCreateGeometry;
      },
      modalsError: function() { return this.$store.getters.errorStatus; },
      currentlyLoading: function() {
        return this.$store.getters.currentlyLoading;
      },
    },
  };
</script>
