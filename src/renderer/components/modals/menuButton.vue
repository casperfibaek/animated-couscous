<template>
  <button v-on:click="setModal({ modal: 'menu', status: true });" type='button' class='btn btn-primary userMenuButton'>
    <i class="icon icon-menu"></i><span> Menu</span></button>
</template>

<style>
.userMenuButton{
  position: fixed;
  top: 46px;
  right: 10px;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  border: none !important;
  border-radius: 3px;
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'menuButton-modal',
  methods: {
    setModal(options) { this.$store.commit('setModal', options); },
  },
};
</script>
