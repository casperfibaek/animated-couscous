<template>
  <div id='create' class="base">
    <h5>Create new site</h5>
    <div class="divider"></div>

    <form name="createSite" class="form-horizontal" onsubmit="return false">

      <div class="form-group">
        <label class="form-label" for="form-satellite">Satellite</label>
        <div class="content">
          <select class="form-select form-input" reference="frequency" id="form-satellite" v-model="satellite">
            <option value="Sentinel-1" selected="selected">Sentinel-1</option>
            <option value="Sentinel-2">Sentinel-2</option>
          </select>
        </div>
      </div>
      <baseForm></baseForm>

      <div class="form-advanced-container">
         <div class="form-advanced-content">
          <button v-on:click="displayAdvanced" class="btn btn-action circle" id="form-advanced" type="button">
            <i v-bind:class="{
              'icon-up-open-mini': !showAdvanced,
              'icon-down-open-mini': showAdvanced
            }"></i>
          </button>
          <label class="form-label advanced" for="form-advanced">Advanced</label>
        </div>
      </div>

      <advanced_s1 v-if="satellite === 'Sentinel-1'" v-show="showAdvanced"></advanced_s1>
      <advanced_s2 v-if="satellite === 'Sentinel-2'" v-show="showAdvanced"></advanced_s2>
    </form>

    <router-link :to="{ path: '/overview' }">
      <button class="btn btn-secondary float-left margin-top">
        <i class="icon-"></i>
        <span class="padding-both">Back</span>
      </button>
    </router-link>

    <button v-on:click="processForm" type="submit" class="btn btn-primary float-right margin-top">
      <span class="padding-both">Create</span>
    </button>

  </div>
</template>

<style>
  #create {
    max-width: 600px;
    margin: 0 auto;
    padding: 36px;
    padding-bottom: 70px;
  }

  #create > h5 {
    text-align: center;
  }

  .form-advanced-container{
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .form-label.advanced{
    display: inline;
    user-select: none;
  }

  .form-advanced-content{
    margin: 0 auto;
    padding-left: 100px;
  }

</style>


<script>
  import baseForm from './createSentinel/baseForm.vue';
  import advanced_s1 from './createSentinel/advancedS1.vue';
  import advanced_s2 from './createSentinel/advancedS2.vue';
  import createSite from '../assets/javascript/utils/createSite';

  export default {
    name: 'createSentinel1',
    data() {
      return {
        showAdvanced: false,
        satellite: 'Sentinel-1',
      };
    },
    computed: {
      credentials() { return this.$store.getters.getCredentials; },
    },
    components: {
      advanced_s1,
      advanced_s2,
      baseForm,
    },
    methods: {
      displayAdvanced() {
        this.$data.showAdvanced = !this.$data.showAdvanced;
      },
      processForm() {
        createSite(this, this.credentials, this.satellite);
      },
    },
  };
</script>
