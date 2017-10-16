<template>
  <div class='base'>
    <h5 class="text-bold">Current sites</h5>
    <table class="table table-striped table-hover siteTable">
      <thead>
        <tr>
          <th sorted="down" class="table-head" _ref="sitename" v-on:click='sortTable' sortType="string">
            <span>Sitename</span>
          </th>
          <th sorted="down" class="table-head" _ref="satellite" v-on:click='sortTable' sortType="string">
            <span>Satellite</span>
          </th>
          <th sorted="down" class="table-head" _ref="frequency" v-on:click='sortTable' sortType="number">
            <span>Frequency</span>
          </th>
          <th sorted="down" class="table-head" _ref="downloadtype" v-on:click='sortTable' sortType="string">
            <span>Download type</span>
          </th>
          <th sorted="down" class="table-head" _ref="startDate" v-on:click='sortTable' sortType="number">
            <span>Start date</span>
          </th>
          <th sorted="down" class="table-head" _ref="lastCheck" v-on:click='sortTable' sortType="number">
            <span>Last check</span>
          </th>
          <th sorted="down" class="table-head" _ref="producttype" v-on:click='sortTable' sortType="array">
            <span>Producttype</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='site in sites' class='siteTable-row' v-bind:siteID="site.siteID" v-on:click="clickedRow">
          <td><span>{{ site.sitename }}</span></td>
          <td><span>{{ site.satellite }}</span></td>
          <td><span>{{ site.frequency }}</span></td>
          <td><span>{{ site.downloadtype }}</span></td>
          <td><span>{{ parseDate(site.startDate) }}</span></td>
          <td><span>{{ parseDate(site.lastCheck) }}</span></td>
          <td><span>{{ site.producttype }}</span></td>
        </tr>
      </tbody>
    </table>
    <router-link :to="{ path: '/createSentinel1' }">
      <button type='button' name='submit' class='btn btn-primary margin-top'>
        <span>New Sentinel One</span>
      </button>
    </router-link>
    <router-link :to="{ path: '/createSentinel2' }">
      <button type='button' name='submit' class='btn btn-primary margin-top'>
        <span>New Sentinel Two</span>
      </button>
    </router-link>
  </div>
</template>

<script>
  import DB from '../assets/javascript/database';
  import parseDates from '../assets/javascript/utils/parseDate';
  import getClickedID from '../assets/javascript/utils/getClickedID';
  import findInArray from '../assets/javascript/utils/findInArray';

  export default {
    name: 'allSites',
    async created() {
      this.clearSites();
      const sites = await DB.Sites.findAll({ where: { userID: this.credentials.userID } });
      sites.forEach(site => this.addSite(site), this);
    },
    computed: {
      sites() { return this.$store.getters.getSites; },
      credentials() { return this.$store.getters.getCredentials; },
    },
    methods: {
      addSite(site) { this.$store.commit('addSite', site); },
      setClickedSite(site) { this.$store.commit('setClickedSite', site); },
      clearSites() { this.$store.commit('clearSites'); },
      dynamicSort(options) { this.$store.commit('dynamicSort', options); },

      clickedRow(event) {
        const siteID = getClickedID(event, 'siteID');
        const clicked = findInArray(this.sites, { siteID });
        this.setClickedSite(clicked.dataValues);
        this.$router.push({ path: 'singleSite' });
      },
      parseDate(date) {
        if (date === null || date === 'null') { return 'NA'; }
        return parseDates(date);
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
          array: 'sites',
          reference,
          direction,
        });
      },
    },
  };
</script>

<style>

</style>
