<template>
  <div class='empty base'>
    <h6 class="text-bold">Inspection of {{ clickedSite.sitename }} image</h6>
    <div class="divider"></div>
    <div id="map"></div>
    <router-link :to="{ path: '/singleSite' }">
      <button type='button' name='submit' class='btn btn-primary margin-top float-left'>
        <span>Back</span>
      </button>
    </router-link>
  </div>
</template>

<script>
  /* eslint-disable no-console */
  /* eslint-env browser, node */
  /* globals L */
  import request from 'request-promise-native';

  let Leaflet;
  if (L) { Leaflet = L; } else { console.error('Leaflet not loaded.'); }

  export default {
    name: 'singeImage',
    data() {
      return {
        createdLayer: null,
        map: null,
      };
    },
    mounted: async function created() {
      this.$data.map = Leaflet.map('map', {
        doubleClickZoom: false,
      }).setView([51.505, -0.09], 13);

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.$data.map);

      Leaflet.geoJSON(
        JSON.parse(this.clickedSite.footprint.replace(/'/g, '"')), {
          style: {
            fillOpacity: 0,
            color: '#28da85',
          },
        }).addTo(this.$data.map);

      const imageGeometry = JSON.parse(this.clickedImage.footprintJSON.replace(/'/g, '"'));
      const imageLayer = Leaflet.geoJSON(imageGeometry, {
        style: {
          fillOpacity: 0,
          color: '#da5d47',
        },
      }).addTo(this.$data.map);

      const bounds = imageLayer.getBounds();
      this.$data.map.fitBounds(bounds);

      const thumbnail = await request({
        method: 'GET',
        uri: this.clickedImage.linkQuicklook,
        auth: {
          user: this.credentials.username,
          pass: this.credentials.password,
        },
        encoding: null,
        headers: { 'content-type': 'image/jpeg' },
      });

      const imageURL = URL.createObjectURL(new Blob([thumbnail], {
        type: 'image/jpeg',
      }));

      // The imageOverlay rotate was written by the great Ivan Sanchez!
      const coords = imageGeometry.geometry.coordinates[0].map(coord => coord.reverse());
      const thumbMap = Leaflet.imageOverlay.rotated(imageURL, coords[0], coords[1], coords[3])
        .addTo(this.$data.map);
      thumbMap.on('load', () => imageLayer.removeFrom(this.$data.map));
    },
    computed: {
      clickedImage() { return this.$store.getters.getClickedImage; },
      clickedSite() { return this.$store.getters.getClickedSite; },
      credentials() { return this.$store.getters.getCredentials; },
    },
    methods: {
      clearClickedImage() { return this.$store.commit('clearClickedImage'); },
    },
    beforeDestroy() {
      this.clearClickedImage();
    },
  };
</script>
