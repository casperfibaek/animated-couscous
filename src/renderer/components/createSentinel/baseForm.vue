<template>
  <div class="baseform">
    <div class="form-group">
      <label class="form-label" for="form-sitename">Name</label>
      <div class="content">
        <input class="form-input" type="text" placeholder="Project name" reference="sitename" ref="sitename" required autofocus id="form-sitename">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="form-notes">Notes</label>
      <div class="content">
        <textarea class="form-input" placeholder="Notes regarding the area" rows="3" maxlength="100" reference="notes" required id="form-notes"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="form-frequency">Frequency</label>
      <div class="content">
        <select class="form-select form-input" reference="frequency" id="form-frequency">
          <option>1</option>
          <option>3</option>
          <option>6</option>
          <option selected="selected">12</option>
          <option>24</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Download</label>
      <div class="content content-center">
        <label class="form-radio float-left" for="form-metadata">
           <input class="form-input" type="radio" checked reference="downloadtype" name="downloadtype" value="metadata" id="form-metadata">
           <i class="form-icon"></i>
           <span style="vertical-align: middle">Metadata</span>
         </label>
         <label class="form-radio float-left" for="form-files">
           <input class="form-input" type="radio" name="downloadtype" reference="downloadtype" value="files" id="form-files">
           <i class="form-icon"></i>
           <span style="vertical-align: middle">All files</span>
         </label>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="form-startdate"><span>Start date</span></label>
      <div class="content">
        <input type="date" class="form-input" reference="startDate" id="form-startdate"></input>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label"><span>Geometry</span></label>
      <div class="content">
        <button v-on:click="setModal({ modal: 'createGeometry', status: true }); setGeometryStatus(false); clearGeometry()" type="button" class="form-input btn btn-secondary" v-bind:class="{ 'is-success': geometryStatus }">
          <span v-if="!geometryStatus">Create Geometry</span>
          <span v-if="geometryStatus">Geometry Attached</span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'createSentinel-baseForm',
    mounted() {
      this.$refs.sitename.focus();
    },
    computed: {
      geometryStatus() { return this.$store.getters.getGeometryStatus; },
    },
    methods: {
      setModal(options) { return this.$store.commit('setModal', options); },
      setGeometryStatus(bool) { return this.$store.commit('setGeometryStatus', bool); },
      clearGeometry() { return this.$store.commit('clearGeometry'); },
    },
  };
</script>

<style>

</style>
