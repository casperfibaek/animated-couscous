<template>
  <div class='empty base'>
    <h6 class="text-bold">Create Sentinel 2 Site</h6>
    <div class="divider"></div>

    <form name="createSite" class="form-horizontal" onsubmit="return false">
      <baseForm></baseForm>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="form-cloudcoverpercentage">
            <span>Clouds &lt;=</span>
          </label>
        </div>
        <div class="col-9">
          <input reference="cloudcoverpercentage" type="number" class="form-input" placeholder="10" value="10" max="100" min="1" id="form-cloudcoverpercentage"></input>
        </div>
      </div>

      <div class="form-group">
        <div class="col-3"></div>
        <div class="col-9">
          <button v-on:click="displayAdvanced" class="btn btn-action circle" type="button">
            <i class="icon icon-arrow-down"></i>
          </button>
          <span>Advanced</span>
        </div>
      </div>

      <advanced v-show="showAdvanced"></advanced>

    </form>

    <router-link :to="{ path: '/allSites' }">
      <button class="btn btn-primary float-left margin-top" name="close">
        <span>Close</span>
      </button>
    </router-link>

    <button v-on:click="processForm" type="submit" name="apply" class="btn btn-primary float-right margin-top">
      <span>Apply</span>
    </button>

  </div>
</template>

<script>
  import baseForm from './createSentinel/baseForm.vue';
  import advanced from './createSentinel/advancedS2.vue';
  import createSite from '../assets/javascript/utils/createSite';

  export default {
    name: 'createSentinel2',
    data() {
      return {
        showAdvanced: false,
      };
    },
    computed: {
      credentials() { return this.$store.getters.getCredentials; },
    },
    components: {
      advanced,
      baseForm,
    },
    methods: {
      displayAdvanced() { this.$data.showAdvanced = !this.$data.showAdvanced; },
      processForm() { createSite(this, this.credentials, 'Sentinel-2'); },
    },
  };
</script>
