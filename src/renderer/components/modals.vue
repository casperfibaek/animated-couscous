<template>
  <div class="modals">
    <settings v-if="modal_settings"></settings>
    <createGeometry v-if="modal_createGeometry"></createGeometry>
    <errorToast v-if="errorStatus"></errorToast>
    <loading v-if="loadingStatus"></loading>
  </div>
</template>

<script>
  import settings from './modals/settings.vue';
  import errorToast from './modals/errorToast.vue';
  import loading from './modals/loading.vue';
  import createGeometry from './modals/createGeometry.vue';

  export default {
    name: 'modals',
    components: {
      settings,
      errorToast,
      loading,
      createGeometry,
    },
    computed: {
      loginStatus() { return this.$store.getters.getLoginStatus; },
      modal_settings() { return this.$store.getters.getModal_settings; },
      modal_createGeometry() { return this.$store.getters.getModal_createGeometry; },
      errorStatus() { return this.$store.getters.getErrorStatus; },
      loadingStatus() { return this.$store.getters.getLoadingStatus; },
    },
  };
</script>
