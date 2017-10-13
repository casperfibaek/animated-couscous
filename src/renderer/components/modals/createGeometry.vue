<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container settingsContainer">
      <div class="modal-header">
        <div class="modal-title text-center h6 text-bold">Create rough geometry</div>
        <div class="divider"></div>
      </div>
      <div class="modal-body">
        <div class="content">
          <button type="button" class="btn btn-primary newGeometry" v-on:click="startNewGeometry">
            <span>Start new</span>
          </button>
          <div id="map"></div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="divider">
          <button v-on:click="toggleModal('modalsCreateGeometry')" class="btn btn-primary float-left margin-top" name="close">
            <span>Close</span>
          </button>
          <button type="button" name="apply" class="btn btn-primary tooltip tooltip-bottom float-right margin-top" data-tooltip="Apply your changes." v-on:click="applyGeometry">
            <span>Apply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* globals L */
  let Leaflet;
  if (L) {Leaflet = L} else { console.error('Leaflet not loaded.'); }

  export default {
    name: 'createGeometry-modal',
    data: function () {
      return {
        createdLayer: null,
        map: null,
      }
    },
    mounted() {
      const vm = this;
      vm.$data.map = Leaflet.map('map', {
        doubleClickZoom: false,
      }).setView([51.505, -0.09], 13);
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      	maxZoom: 19,
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(vm.$data.map);

      vm.$data.map.pm.enableDraw('Poly', { finishOnDoubleClick: true });

      vm.$data.map.on('pm:create', function(e) {
        e.layer.on('dblclick', () => e.layer.pm.toggleEdit({
          draggable: true
        }));
        vm.$data.createdLayer = e.layer;
      });

    },
    methods: {
      toggleModal: function(modal) {
        this.$store.commit('toggleModal', modal);
      },
      startNewGeometry: function() {
        if (this.$data.createdLayer) {
          this.$data.map.removeLayer(this.$data.createdLayer);
          this.$data.createdLayer = null;
          this.$data.map.pm.enableDraw('Poly', { finishOnDoubleClick: true });
        }
      },
      applyGeometry: function() {
        if (this.$data.createdLayer) {
          const geometry = this.$data.createdLayer.toGeoJSON();
          this.$store.commit('setGeometryAdded', true);
          this.$store.commit('setGeometry', geometry);
          this.$store.commit('toggleModal', 'modalsCreateGeometry');
        } else {
          this.$store.commit('setGeometryAdded', false);
          this.$store.commit('errorStatusToggleOn');
          this.$store.commit('errorSetMessage', 'Error reading geometry.');
        }
      },
    }
  }
</script>

<style>

</style>
