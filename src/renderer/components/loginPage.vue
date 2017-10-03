<template>
  <div class='empty base'>
    <h4 class="text-bold">Sentinel Data Mananger</h4>
    <object type="image/svg+xml" data="static/logo_nirasspace.svg"
width="105" height="105" border="0" class="nirasSpaceLogo"></object>
    <div class="divider margin-bottom"></div>

    <h6 class="margin-top">Login using your ESA Credentials</h6>
    <form class='loginForm' onsubmit="return false">
      <div class=form-group>
        <label class='form-label text-center' for='username'>Username</label>
        <input autofocus class='form-input username-input col-10 col-mx-auto' type="text" ref="username" placeholder="Enter Username" name="username" required>
        <span class="form-input-hint" v-if='formErrorUsername'>{{ formErrorMessage }}</span>
      </div>

      <div class=form-group>
        <label class='form-label text-center' for='password'>Password</label>
        <input ref="password" class='form-input password-input col-10 col-mx-auto' type="password" placeholder="Enter Password" name="password" required>
        <span class="form-input-hint" v-if='formErrorPassword'>{{ formErrorMessage }}</span>
      </div>

      <div class='form-group margin-top'>
        <!-- <router-link :to="{ path: '/sites' }"> -->
          <button v-on:click="login()" type='submit' name='submit' class='btn btn-primary'>
            <span>Login</span>
          </button>
          <div class="loading" v-if="loading"></div>
        <!-- </router-link> -->
      </div>

      <img src='../assets/icons/logo.png' alt='NIRAS A/S' class='logo' width='160px'></img>
    </form>
  </div>
</template>

<script>
  import esaLogin from '../assets/javascript/esa/esaLogin';
  import db from '../database';

  export default {
    name: 'login-page',
    data: function () {
      return {
        loading: false,
      }
    },
    created: async function created(){
      const vm = this;
      try {
        if (!vm.$store.getters.dbInitalized) {
          db.initialize()
            .then(async function() {
              vm.$store.commit('setDbInitialized', true);
              const user = await db.getLatestUser('users', 'lastLogin');
              const username = vm.$refs.username.value;
              if (username.length === 0) {
                vm.$refs.username.value = user.username;
              }
            })
        } else {
          const user = await db.getLatestUser('users', 'lastLogin');
          const username = vm.$refs.username.value;
          if (username.length === 0) {
            vm.$refs.username.value = user.username;
          }
        }
      } catch (err) {
        this.$store.commit('errorStatusToggleOn');
        this.$store.commit('errorSetMessage', err.message);
        this.$data.loading = false;
      }
    },
    computed: {
      formErrorUsername: function() {
        return this.$store.getters.formErrorUsername;
      },
      formErrorPassword: function() {
        return this.$store.getters.formErrorPassword;
      },
      formErrorMessage: function() {
        return this.$store.getters.formErrorMessage;
      },
    },
    methods: {
      login: async function() {
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;
        if (username.length < 4) {
          this.$store.commit('formErrorToggleUsername', true);
          this.$store.commit('formErrorSetMessage', 'Username must have at least 4 characters');
        } else if (password.length < 4) {
          this.$store.commit('formErrorToggleUsername', false);
          this.$store.commit('formErrorTogglePassword', true);
          this.$store.commit('formErrorSetMessage', 'Password must have at least 4 characters');
        } else {
          this.$store.commit('formErrorToggleUsername', false);
          this.$store.commit('formErrorTogglePassword', false);
          this.$data.loading = true;
          const vm = this;

          try{
            let user = await db.getUser('users', { username, password });
            if (user && user.userID) {
              const updateUserLogin = await db.updateUser(user.userID, {
                lastLogin: Math.floor(new Date().getTime() / 1000),
              });
              vm.$store.commit('setCredentials', user);
              vm.$store.commit('setLoggedIn', true);
              vm.$data.loading = false;
              vm.$router.push({ path: 'sites' });
            } else {
              user = await esaLogin(username, password);
              if (user) {
                user.lastLogin = Math.floor(new Date().getTime() / 1000);
                const createUser = await db.createUser(user);
                vm.$store.commit('setCredentials', user);
                vm.$store.commit('setLoggedIn', true);
                vm.$data.loading = false;
                vm.$router.push({ path: 'sites' });
              } else {
              }
            }
          } catch (err) {
            console.log(err);
            this.$store.commit('errorStatusToggleOn');
            this.$store.commit('errorSetMessage', err.message);
            this.$data.loading = false;
          }
        }
      },
    }
  }
</script>
