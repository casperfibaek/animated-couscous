<template>
  <div class="modals">
    <!-- <menuButton v-if="!modal_menu && loginStatus"></menuButton> -->
    <menuButton v-if="!modal_menu"></menuButton>
    <userMenu v-if="modal_menu"></userMenu>
    <settings v-if="modal_settings"></settings>
    <createGeometry v-if="modal_createGeometry"></createGeometry>
    <errorToast v-if="errorStatus"></errorToast>
    <loading v-if="loadingStatus"></loading>
  </div>
</template>

<script>
  import menuButton from './modals/menuButton.vue';
  import userMenu from './modals/userMenu.vue';
  import settings from './modals/settings.vue';
  import errorToast from './modals/errorToast.vue';
  import loading from './modals/loading.vue';
  import createGeometry from './modals/createGeometry.vue';

  export default {
    name: 'modals',
    components: {
      menuButton,
      userMenu,
      settings,
      errorToast,
      loading,
      createGeometry,
    },
    computed: {
      loginStatus() { return this.$store.getters.getLoginStatus; },
      modal_menu() { return this.$store.getters.getModal_menu; },
      modal_settings() { return this.$store.getters.getModal_settings; },
      modal_createGeometry() { return this.$store.getters.getModal_createGeometry; },
      errorStatus() { return this.$store.getters.getErrorStatus; },
      loadingStatus() { return this.$store.getters.getLoadingStatus; },
    },
  };
</script>
