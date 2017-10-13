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
    <router-link :to="{ path: '/sites' }">
      <button type='button' name='submit' class='btn btn-primary margin-top float-left'>
        <span>Back</span>
      </button>
    </router-link>
  </div>
</template>

<script>
  import DB from '../database';
  import parseDate from '../assets/javascript/parseDate';

  export default {
    name: 'inspectSite-page',
    created: async function created() {
      const vm = this;

      vm.$data.site = vm.$store.getters.getClickedSite;
      const imageIDs = vm.$data.site.images.split(',');
      imageIDs.forEach((imageID) => {
        DB.Images.findById(imageID).then(image => {
          vm.addImage(image.dataValues);
        });
      });

    },
    data: function () {
      return {
        site: { sitename: '' },
      };
    },
    computed: {
      images: function() {
        return this.$store.getters.getImages;
      },
    },
    methods: {
      parseDates: function(date) {
        return parseDate(date);
      },
      addImage: function(image) {
        this.$store.commit('addImage', image);
      },
      addClickedImage: function(image) {
        this.$store.commit('addClickedImage', image);
      },
      clickedRow: function(event) {
        const target = event.target;

        let clicked;
        if (target.hasAttributes('imageID')) {
          clicked = target.getAttribute('imageID');
        } else if (target.parentElement.hasAttributes('imageID')) {
          clicked = target.parentElement.getAttribute('imageID');
        } else {
          clicked = target.parentElement.parentElement.getAttribute('imageID');
        }
        clicked = Number(clicked);

        let clickedImage;
        for (let image of this.images) {
          if (image.imageID === clicked) { clickedImage = image; break; }
        }

        this.addClickedImage(clickedImage);
        this.$router.push({ path: 'inspectImage' });
      },
      sortTable: function sortTable(event) {
        const attributes = event.target.attributes;
        const sortType = attributes.sortType.value;
        const reference = attributes._ref.value;
        const sorted = attributes.sorted.value;
        const direction = (sorted === 'down') ? 1 : -1;

        let sortFunction = 'dynamicSortAlphabetic';
        if (sortType === 'number') { sortFunction = 'dynamicSortNumbers'; }
        if (sortType === 'array') { sortFunction = 'dynamicSortArray'; }

        if (direction === 1) {
          event.target.attributes.sorted.nodeValue = 'up';
        } else {
          event.target.attributes.sorted.nodeValue = 'down';
        }

        this.$store.commit(sortFunction, {
          array: 'images',
          reference: reference,
          direction: direction,
        });
      },
    },
    beforeDestroy() {
      this.$store.commit('clearImages');
    },
  };
</script>
