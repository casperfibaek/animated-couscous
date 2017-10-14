<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container loadingModal">
      <div class="modal-header">
        <div class="modal-title text-center h6 text-bold">Loading</div>
        <div class="divider"></div>
      </div>
      <div class="modal-body">
        <div class="content">
          <div class="loading"></div>
          <div class="divider"></div>
          <span> {{ loadingMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading-modal',
    computed: {
      loadingMessage() { return this.$store.getters.getLoadingMessage; },
    },
  };
</script>

<style>

</style>
