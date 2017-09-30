<template>
  <div class="toast toast-warning">
    <button class="btn btn-clear float-right"></button>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: 'errorToast-modal',
    computed: {
      errorMessage: function() { return this.$store.getters.errorMessage; },
    }
  }
</script>

<style>

</style>
