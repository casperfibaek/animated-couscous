<template>
  <button v-on:click="setModal({ modal: 'menu', status: true });" type='button' class='btn btn-secondary userMenuButton'>
    <i class="icon icon-menu"></i>
      <span> Menu</span>
  </button>
</template>

<script>
export default {
  name: 'menuButton-modal',
  methods: {
    setModal(options) { this.$store.commit('setModal', options); },
  },
};
</script>

<style>

</style>
