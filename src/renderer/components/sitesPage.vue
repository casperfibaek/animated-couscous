<template>
  <div class='empty base'>
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
  import DB from '../database';
  import parseDates from '../assets/javascript/parseDate';

  export default {
    name: 'sites-page',
    created: async function created() {
      const vm = this;

      this.$store.commit('clearSites');
      const credentials = this.getCredentials();
      const sites = await DB.Sites.findAll({
        where: { userID: credentials.userID },
      });
      sites.forEach(site => vm.addSite(site))
    },
    computed: {
      sites: function() {
        return this.$store.getters.getSites;
      },
    },
    methods: {
      clickedRow: function(event) {
        let clicked;
        const target = event.target;
        if (target.hasAttributes('siteID')) {
          clicked = target.getAttribute('siteID');
        } else if (target.parentElement.hasAttributes('siteID')) {
          clicked = target.parentElement.getAttribute('siteID');
        } else {
          clicked = target.parentElement.parentElement.getAttribute('siteID');
        }
        clicked = Number(clicked);

        let clickedSite;
        for (let site of this.sites) {
          if (site.siteID === clicked) { clickedSite = site; break; }
        }

        this.addClickedSite(clickedSite.dataValues);

        this.$router.push({ path: 'inspectSite' });
      },
      parseDate: function(date) {
        if (date === null || date === 'null') { return 'NA'}
        return parseDates(date);
      },
      addSite: function(site) {
        this.$store.commit('addSite', site);
      },
      addClickedSite: function(site) {
        this.$store.commit('addClickedSite', site);
      },
      getCredentials: function() {
        return this.$store.getters.credentials;
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
  }
</script>

<style>

</style>
