<template>
  <div class='empty base'>
    <h6 class="text-bold">Inspection of {{ site.sitename }}</h6>
    <div class="divider"></div>
    <div class="imageTable-holder">
      <table class="table table-striped table-hover imageTable">
        <thead>
          <tr class="imageTable-head">
            <th sorted="down" class="table-head" _ref="endposition" v-on:click='sortTable' sortType="number">
              <span>Time</span>
            </th>
            <th sorted="down" class="table-head" _ref="platformname" v-on:click='sortTable' sortType="string">
              <span>Satellite</span>
            </th>
            <th sorted="down" class="table-head" _ref="instrumentname" v-on:click='sortTable' sortType="string">
              <span>Instrument</span>
            </th>
            <th sorted="down" class="table-head" _ref="producttype" v-on:click='sortTable' sortType="string">
              <span>Type</span>
            </th>
            <th sorted="down" class="table-head" _ref="polarisationmode" v-on:click='sortTable' sortType="string">
              <span>Polarisation</span>
            </th>
            <th sorted="down" class="table-head" _ref="sensoroperationalmode" v-on:click='sortTable' sortType="string">
              <span>Sensor</span>
            </th>
            <th sorted="down" class="table-head" _ref="cloudcoverpercentage" sortType="string">
              <span>Clouds</span>
            </th>
            <th sorted="down" class="table-head" _ref="tileid" sortType="string">
              <span>Tile</span>
            </th>
            <th sorted="down" class="table-head" _ref="size" v-on:click='sortTable' sortType="string">
              <span>Size</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for='image in images'
          class='imageTable-row'
          v-bind:imageID="image.imageID"
          v-on:click="clickedRow">
            <td><span>{{ parseDates(image.endposition) }}</span></td>
            <td><span>{{ image.platformname }}</span></td>
            <td><span>{{ image.instrumentname }}</span></td>
            <td><span>{{ image.producttype }}</span></td>
            <td>
              <span v-if="image.polarisationmode">{{ image.polarisationmode }}</span><span v-else>-</span>
            </td>
            <td>
              <span v-if="image.sensoroperationalmode">{{ image.sensoroperationalmode }}</span>
              <span v-else>-</span>
            </td>
            <td>
              <span v-if="image.cloudcoverpercentage">{{ image.cloudcoverpercentage }}</span>
              <span v-else>-</span>
            </td>
            <td>
              <span v-if="image.tileid">{{ image.tileid }}</span>
              <span v-else>-</span>
            </td>
            <td><span>{{ image.size }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link :to="{ path: '/allSites' }">
      <button type='button' name='submit' class='btn btn-primary margin-top float-left'>
        <span>Back</span>
      </button>
    </router-link>
  </div>
</template>

<script>
  import DB from '../assets/javascript/database';
  import parseDate from '../assets/javascript/utils/parseDate';
  import getClickedID from '../assets/javascript/utils/getClickedID';
  import findInArray from '../assets/javascript/utils/findInArray';

  export default {
    name: 'singleSite',
    created: async function created() {
      const vm = this;

      const imageIDs = this.clickedSite.images.split(',');
      imageIDs.forEach((imageID) => {
        DB.Images.findById(imageID)
          .then((image) => { vm.addImage(image.dataValues); });
      });
    },
    data() {
      return {
        site: { sitename: '' },
      };
    },
    computed: {
      images() { return this.$store.getters.getImages; },
      clickedSite() { return this.$store.getters.getClickedSite; },
    },
    methods: {
      addImage(image) { this.$store.commit('addImage', image); },
      setClickedImage(image) { this.$store.commit('setClickedImage', image); },
      dynamicSort(options) { this.$store.commit('dynamicSort', options); },

      parseDates(date) { return parseDate(date); },
      clickedRow(event) {
        const imageID = getClickedID(event, 'imageID');
        const clicked = findInArray(this.images, { imageID });

        this.setClickedImage(clicked);
        this.$router.push({ path: 'singleImage' });
      },
      sortTable: function sortTable(event) {
        const attributes = event.target.attributes;
        const sortType = attributes.sortType.value;
        const reference = attributes._ref.value;
        const sorted = attributes.sorted.value;
        const direction = (sorted === 'down') ? 1 : -1;

        /* eslint-disable no-param-reassign */
        if (direction === 1) {
          event.target.attributes.sorted.nodeValue = 'up';
        } else {
          event.target.attributes.sorted.nodeValue = 'down';
        }
        /* eslint-enable no-param-reassign */

        this.dynamicSort({
          type: sortType,
          array: 'images',
          reference,
          direction,
        });
      },
    },
    beforeDestroy() {
      this.$store.commit('clearImages');
    },
  };
</script>
