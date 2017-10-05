<template>
  <div class='empty base'>
    <h6 class="text-bold">Create Sentinel 2 Site</h6>
    <div class="divider"></div>

    <form name="createSite" class="form-horizontal" onsubmit="return false">
      <baseForm></baseForm>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label">
            <span>Clouds &lt;=</span>
          </label>
        </div>
        <div class="col-9">
          <input reference="cloudcoverpercentage" type="number" class="form-input" placeholder="10" value="10" max="100" min="1"></input>
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

    <router-link :to="{ path: '/sites' }">
      <button class="btn btn-primary float-left margin-top" name="close">
        <span>Close</span>
      </button>
    </router-link>

    <button v-on:click="createSite" type="submit" name="apply" class="btn btn-primary float-right margin-top">
      <span>Apply</span>
    </button>

  </div>
</template>

<script>
import baseForm from './createSentinel/baseForm';
import advanced from './createSentinel/advancedS2';
import postAndProcess from '../assets/javascript/postAndProcess';

  export default {
    name: 'createSentinel2-page',
    data: function () {
      return {
        showAdvanced: false,
      }
    },
    components: {
      baseForm,
      advanced,
    },
    methods: {
      displayAdvanced: function() {
        this.$data.showAdvanced = !this.$data.showAdvanced;
      },
      createSite: function() {
        const vm = this;
        const credentials = vm.$store.getters.credentials;

        postAndProcess(vm, credentials, 'Sentinel-2');
      }
    }
  };
</script>
