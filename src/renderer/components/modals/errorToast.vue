<template>
  <div class="toast toast-warning">
    <button v-on:click="clearToast" class="btn btn-clear float-right"></button>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: 'errorToast-modal',
    computed: {
      errorMessage: function() { return this.$store.getters.errorMessage; },
    },
    methods: {
      clearToast: function() {
        this.$store.commit('errorStatusToggleOff');
      },
    },
  }
</script>

<style>

</style>
