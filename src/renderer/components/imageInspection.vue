<template>
  <div class='empty base'>
    <h6 class="text-bold">Inspection of {{ site.sitename }} image</h6>
    <div class="divider"></div>
    <div id="map"></div>
    <router-link :to="{ path: '/inspectSite' }">
      <button type='button' name='submit' class='btn btn-primary margin-top float-left'>
        <span>Back</span>
      </button>
    </router-link>
  </div>
</template>

<script>
  import request from 'request-promise-native';
  import DB from '../database';
  let Leaflet;
  if (L) {Leaflet = L} else { console.error('Leaflet not loaded.'); }

  export default {
    name: 'inspectImage-page',
    data: function () {
      return {
        createdLayer: null,
        map: null,
      }
    },
    mounted: async function created() {
      const vm = this;

      vm.$data.map = Leaflet.map('map', {
        doubleClickZoom: false,
      }).setView([51.505, -0.09], 13);

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(vm.$data.map);

      const site = Leaflet.geoJSON(
        JSON.parse(vm.site.footprint.replace(/'/g, '"')), {
        style: {
          fillOpacity: 0,
          color: '#28da85',
      }}).addTo(vm.$data.map);

      const imageLayer = Leaflet.geoJSON(
        JSON.parse(vm.image.footprintJSON.replace(/'/g, '"')), {
        style: {
          fillOpacity: 0,
          color: '#da5d47',
      }}).addTo(vm.$data.map);

      const bounds = imageLayer.getBounds();
      vm.$data.map.fitBounds(bounds);

      const thumbnail = await request({
        method: 'GET',
        uri: vm.image.linkQuicklook,
        auth: {
          user: vm.credentials.username,
          pass: vm.credentials.password,
        },
        encoding: null,
        headers: { 'content-type': 'image/jpeg' },
      });

      const imageURL = URL.createObjectURL(new Blob([thumbnail], {
        type: 'image/jpeg',
      }));

      console.log(imageURL);

      Leaflet.imageOverlay(imageURL, bounds).addTo(vm.$data.map);

    },
    computed: {
      image: function() {
        return this.$store.getters.getClickedImage;
      },
      site: function() {
        return this.$store.getters.getClickedSite;
      },
      credentials: function() {
        return this.$store.getters.credentials;
      },
    },
    methods: {
      //
    },
    beforeDestroy() {
      this.$store.commit('clearClickedImage');
    },
  };
</script>
