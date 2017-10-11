<template>
  <div class='empty base'>
    <h6 class="text-bold">Inspection of {{ sitename }}</h6>
    <div class="divider"></div>
    <div class="imageTable-holder">
      <table class="table table-striped table-hover imageTable">
        <thead>
          <tr class="imageTable-head">
            <th v-for="(value, key) in images[0]">
              <span>{{ key }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="image in images" class="imageTable-row" v-on:click="clickedRow">
            <td v-for="(value, key) in image">
              <span>{{ value }}</span>
            </td>
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
  import parseImages from '../assets/javascript/parseImages';

  export default {
    name: 'inspection-page',
    created: async function created() {
      const vm = this;
      const siteID = Number(this.$route.params.siteID);
        const site = this.sites.filter(site => site.siteID === siteID)[0];
        if (site) {
          this.$data.sitename = site.sitename;
          const imageIDs = site.images.split(',').map(entry => Number(entry));
          console.log(imageIDs);
          imageIDs.forEach((imageID) => {
            DB.Images.findById(imageID).then(image => {
              vm.images.push(parseImages(image.dataValues));
            });
          });
        } else {
          console.error('no site?');
        }

    },
    data: function () {
      return {
        sitename: '',
        images: [],
      };
    },
    computed: {
      sites: function() {
        return this.$store.getters.getSites;
      },
    },
    components: {
      //
    },
    methods: {
      clickedRow: function(event) {
        console.log(event);
      }
    }
  };
</script>
