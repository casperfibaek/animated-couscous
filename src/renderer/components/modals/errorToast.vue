<template>
  <div class="toast toast-warning">
    <button v-on:click="setErrorStatus(false);" class="btn btn-clear float-right"></button>
    <span>{{ errorMessage }}</span>
  </div>
</template>
<style>
  .toast{
    position: fixed;
    z-index: 1000;
    max-height: 60px;
    bottom: 10px;
    right: 10px;
    max-width: 360px;
  }
</style>

<script>
  export default {
    name: 'errorToast-modal',
    mounted() {
      setTimeout(() => { this.setErrorStatus(false); }, 10 * 1000);
    },
    computed: {
      errorMessage() { return this.$store.getters.getErrorMessage; },
    },
    methods: {
      setErrorStatus(bool) { this.$store.commit('setErrorStatus', bool); },
    },
  };
</script>
