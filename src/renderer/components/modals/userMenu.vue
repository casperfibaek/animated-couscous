<template>
  <div class="userMenu">
    <ul class="menu">
      <a>
        <i class="icon icon-people"></i>
        <span>{{ credentials.firstname }} {{ credentials.lastname }}</span>
      </a>
      <li class="divider"></li>
      <li class="menu-item" v-on:click="setModal({ modal: 'settings', status: true });">
        <a>
          <i class="icon icon-more-horiz"></i>
          <span> Settings</span>
        </a>
      </li>
      <li class="menu-item">
        <a href="#/loginPage" v-on:click="logout()">
          <i class="icon icon-arrow-left"></i>
          <span> Logout</span>
        </a>
      </li>
      <li class="divider"></li>
      <li class="menu-item" v-on:click="closeProgramme">
        <a>
          <i class="icon icon-cross"></i>
          <span> Close Programme</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
  .userMenu{
    position: absolute;
    top: 6px;
    right: 10px;
    z-index: 10;
  }
</style>

<script>
  import electron from 'electron'; // eslint-disable-line
  import { remote } from 'electron';  // eslint-disable-line

  export default {
    name: 'userMenu-modal',
    computed: {
      credentials() { return this.$store.getters.getCredentials; },
    },
    methods: {
      setModal(options) { this.$store.commit('setModal', options); },
      setLoginStatus(bool) { this.$store.commit('setLoginStatus', bool); },
      clearCredentials() { this.$store.commit('clearCredentials'); },

      closeProgramme() { remote.getCurrentWindow().close(); },
      logout() {
        this.setModal({ modal: 'menu', status: false });
        this.setLoginStatus(false);
        this.clearCredentials();
      },
    },
  };
</script>

<style>

</style>
