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
        <span class="form-input-hint" v-if='formErrorUsernameStatus'>{{ formErrorMessage }}</span>
      </div>

      <div class=form-group>
        <label class='form-label text-center' for='password'>Password</label>
        <input ref="password" class='form-input password-input col-10 col-mx-auto' type="password" placeholder="Enter Password" name="password" required>
        <span class="form-input-hint" v-if='formErrorPasswordStatus'>{{ formErrorMessage }}</span>
      </div>

      <div class='form-group margin-top'>
        <button v-on:click="login()" type='submit' name='submit' class='btn btn-primary'>
          <span>Login</span>
        </button>
        <div class="loading" v-if="loading"></div>
      </div>

      <img src='../assets/icons/logo.png' alt='NIRAS A/S' class='logo' width='160px'></img>
    </form>
  </div>
</template>

<script>
  import esaLogin from '../assets/javascript/esa/esaLogin';
  import DB from '../assets/javascript/database';

  export default {
    name: 'login',
    data() {
      return {
        loading: false,
      };
    },
    async mounted() {
      try {
        if (!this.databaseStatus) {
          await DB.initialize();
          this.setDatabaseStatus(true);
        }
        const user = await DB.Users.findOne({
          order: [['createdAt', 'DESC']],
        });
        const username = this.$refs.username.value;
        if (username.length === 0) {
          this.$refs.username.value = user.username;
        }
      } catch (err) {
        this.setErrorStatus(true);
        this.setErrorMessage(err);
      } finally {
        this.$data.loading = false;
      }
    },
    computed: {
      databaseStatus() { return this.$store.getters.getDatabaseStatus; },
      formErrorUsernameStatus() { return this.$store.getters.getFormErrorUsernameStatus; },
      formErrorPasswordStatus() { return this.$store.getters.getFormErrorPasswordStatus; },
      formErrorMessage() { return this.$store.getters.getFormErrorMessage; },
    },
    methods: {
      setDatabaseStatus(bool) { return this.$store.commit('setDatabaseStatus', bool); },
      setLoginStatus(bool) { return this.$store.commit('setLoginStatus', bool); },
      setCredentials(credentials) {
        return this.$store.commit('setCredentials', credentials);
      },
      setFormErrorUsernameStatus(bool) {
        return this.$store.commit('setFormErrorUsernameStatus', bool);
      },
      setFormErrorPasswordStatus(bool) {
        return this.$store.commit('setFormErrorPasswordStatus', bool);
      },
      setFormErrorSetMessage(string) {
        return this.$store.commit('setFormErrorSetMessage', string);
      },
      setErrorStatus(bool) { return this.$store.commit('setErrorStatus', bool); },
      setErrorMessage(string) { return this.$store.commit('setErrorMessage', string); },

      async login() {
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;
        if (username.length < 4) {
          this.setFormErrorUsernameStatus(true);
          this.setFormErrorSetMessage('Username must have at least four characters');
        } else if (password.length < 4) {
          this.setFormErrorUsernameStatus(false);
          this.setFormErrorPasswordStatus(true);
          this.setFormErrorSetMessage('Password must have at least four characters');
        } else {
          this.setFormErrorUsernameStatus(false);
          this.setFormErrorPasswordStatus(false);
          this.$data.loading = true;

          try {
            let user = await DB.Users.findOne({
              where: { username, password },
            });

            if (user) {
              await DB.Users.update({
                lastLogin: new Date(),
              }, {
                where: { userID: user.userID },
              });
              this.setCredentials(user.dataValues);
              this.setLoginStatus(true);
              this.$router.push({ path: 'allSites' });
            } else {
              user = await esaLogin(username, password);
              if (user) {
                user.lastLogin = new Date();
                await DB.Users.create(user.dataValues);
                this.setCredentials(user.dataValues);
                this.setLoginStatus(true);
                this.$router.push({ path: 'allSites' });
              } else {
                this.setErrorStatus(true);
                this.setErrorMessage('Could not find user');
              }
            }
          } catch (err) {
            this.setErrorStatus(true);
            this.setErrorMessage(err.message);
          } finally {
            this.$data.loading = false;
          }
        }
      },
    },
  };
</script>