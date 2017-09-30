<template>
  <button v-on:click="toggleMenu" type='button' class='btn btn-secondary userMenuButton'>
    <i class="icon icon-menu"></i>
      <span> Menu</span>
  </button>
</template>

<script>
export default {
  name: 'userMenuButton',
  methods: {
    toggleMenu: function () {
      this.$store.commit('toggleModal', 'modalsMenu');
    },
  },
}
</script>

<style>

</style>
