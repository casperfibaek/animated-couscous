<template>
  <div class="baseform">
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Name</label>
      </div>
      <div class="col-9">
        <input class="form-input" type="text" placeholder="Project name" reference="sitename" ref="sitename" required autofocus>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Notes</label>
      </div>
      <div class="col-9">
        <textarea class="form-input" placeholder="Notes regarding the area" rows="3" maxlength="100" reference="notes" required></textarea>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Frequency</label>
      </div>
      <div class="col-9">
        <select class="form-select form-input" reference="frequency">
          <option>1</option>
          <option>3</option>
          <option>6</option>
          <option selected="selected">12</option>
          <option>24</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Download</label>
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <label class="form-radio float-left">
          <input class="form-input" type="radio" checked reference="downloadtype" value="metadata">
          <i class="form-icon"></i>
          <span style="font-size: 0.99em;">Metadata</span>
        </label>
      </div>
      <div class="col-4">
        <label class="form-radio float-left">
          <input class="form-input" type="radio" reference="downloadtype" value="files">
          <i class="form-icon"></i>
          <span style="font-size: 0.99em;">All files</span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label"><span>Start date</span></label>
      </div>
      <div class="col-9">
        <input type="date" class="form-input" reference="startDate"></input>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label"><span>Geometry</span></label>
      </div>
      <div class="col-9">
        <button v-on:click="toggleCreateGeometry" type="button" class="form-input btn btn-secondary" v-bind:class="{
          'is-success': geometryAdded
        }">
          <span v-if="!geometryAdded">Create Geometry</span>
          <span v-if="geometryAdded">Geometry Attached</span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'createSentinel1-baseForm',
    mounted() {
      this.$refs.sitename.focus();
    },
    computed: {
      geometryAdded: function() {
        return this.$store.getters.geometryAdded;
      },
    },
    methods: {
      toggleCreateGeometry: function (modal) {
        this.$store.commit('toggleModal', 'modalsCreateGeometry');
        this.$store.commit('setGeometryAdded', false);
        this.$store.commit('setGeometry', null);
      },
    }
  }
</script>

<style>

</style>
