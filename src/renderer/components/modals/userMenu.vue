<template>
  <div class="userMenu">
    <ul class="menu">
      <a>
        <i class="icon icon-people"></i>
        <span>{{ FirstName }} {{ LastName }}</span>
      </a>
      <li class="divider"></li>
      <li class="menu-item" v-on:click="toggle('modalsSettings')">
        <a>
          <i class="icon icon-more-horiz"></i>
          <span> Settings</span>
        </a>
      </li>
      <li class="menu-item">
        <a href="#/loginPage" v-on:click="toggle('modalsMenu')">
          <i class="icon icon-arrow-left"></i>
          <span> Logout</span>
        </a>
      </li>
      <li class="divider"></li>
      <li class="menu-item">
        <a>
          <i class="icon icon-cross"></i>
          <span> Close Programme</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'userMenu-modal',
    computed: {
      Username: function() {
        return this.$store.getters.credentials.Username;
      },
      FirstName: function() {
        return this.$store.getters.credentials.FirstName;
      },
      LastName: function() {
        return this.$store.getters.credentials.LastName;
      },
    },
    methods: {
      toggle: function (modal) {
        this.$store.commit('toggleModal', modal);
      },
    },
    components: {
      //
    }
  }
</script>

<style>

</style>
