<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title text-center h5">Create Geometry</div>
      </div>
      <div class="modal-body">
        <div class="geometry-content">
          <div id="map">
            <button type="button" class="btn btn-primary newGeometry" v-on:click="startNewGeometry">
              <span>Start new</span>
            </button>
          </div>
          <button v-on:click="setModal({modal: 'createGeometry', status: false});" class="btn btn-secondary float-left margin-top" name="close">
            <span class="padding-both">Back</span>
          </button>
          <button type="button" name="apply" class="btn btn-primary tooltip tooltip-bottom float-right margin-top" data-tooltip="Apply your changes." v-on:click="applyGeometry">
            <span class="padding-both">Apply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #map{
    height: 360px;
    width: 100%;
  }

  .newGeometry{
    position: relative;
    z-index: 1000;
    float: right;
    right: 10px;
    top: 10px;
  }

  .geometry-content{
    overflow: hidden;
  }
</style>


<script>
  /* eslint-disable no-console */
  /* eslint-env browser, node */
  /* globals L */

  let Leaflet;
  if (L) { Leaflet = L; } else { console.error('Leaflet not loaded.'); }

  export default {
    name: 'createGeometry-modal',
    data() {
      return {
        createdLayer: null,
        map: null,
      };
    },
    mounted() {
      const vm = this;
      this.$data.map = Leaflet.map('map', {
        doubleClickZoom: false,
      }).setView([51.505, -0.09], 13);

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.$data.map);

      this.$data.map.pm.enableDraw('Poly', { finishOnDoubleClick: true });

      this.$data.map.on('pm:create', (e) => {
        e.layer.on('dblclick', () => e.layer.pm.toggleEdit({ draggable: true }));
        vm.$data.createdLayer = e.layer;
      });
    },
    methods: {
      setModal(options) { this.$store.commit('setModal', options); },
      setGeometryStatus(bool) { this.$store.commit('setGeometryStatus', bool); },
      setGeometry(geojson) { this.$store.commit('setGeometry', geojson); },
      setErrorStatus(bool) { this.$store.commit('setErrorStatus', bool); },
      setErrorMessage(string) { this.$store.commit('setErrorMessage', string); },
      startNewGeometry() {
        if (this.$data.createdLayer) {
          this.$data.map.removeLayer(this.$data.createdLayer);
          this.$data.createdLayer = null;
          this.$data.map.pm.enableDraw('Poly', { finishOnDoubleClick: true });
        }
      },
      applyGeometry() {
        if (this.$data.createdLayer) {
          const geometry = this.$data.createdLayer.toGeoJSON();
          this.setGeometryStatus(true);
          this.setGeometry(geometry);
          this.setModal({ modal: 'createGeometry', status: false });
        } else {
          this.setGeometryStatus(false);
          this.setErrorStatus(true);
          this.setErrorMessage('Error reading geometry.');
        }
      },
    },
  };
</script>

<style>

</style>
