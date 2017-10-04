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
          <th sorted="down" class="table-head" _ref="startDate" v-on:click='sortTable' sortType="date">
            <span>Start date</span>
          </th>
          <th sorted="down" class="table-head" _ref="lastCheck" v-on:click='sortTable' sortType="date">
            <span>Last check</span>
          </th>
          <th sorted="down" class="table-head" _ref="producttype" v-on:click='sortTable' sortType="array">
            <span>Producttype</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='site in sites' class='siteTable-row'>
          <td>
            <span>{{ site.sitename }}</span>
          </td>
          <td>
            <span>{{ site.satellite }}</span>
          </td>
          <td>
            <span class="float-right">{{ site.frequency }}</span>
          </td>
          <td>
            <span>{{ site.downloadtype }}</span>
          </td>
          <td>
            <span>{{ site.startDate }}</span>
          </td>
          <td>
            <span>{{ site.lastCheck }}</span>
          </td>
          <td>
            <span>{{ site.producttype }}</span>
          </td>
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
  import db from '../database';

  export default {
    name: 'sites-page',
    created() {
      const vm = this;
      vm.$store.commit('clearSites');
      const userID = this.$store.getters.credentials.userID;
      db.getUserSites('sites', {userID: userID}).then((data) => {
        data.forEach((site) => {
          vm.$store.commit('addSite', site);
        });
      });
    },
    computed: {
      sites: function() { return this.$store.getters.sites; },
    },
    methods: {
      addSite: function (site) {
        this.$store.commit('addSite', site);
      },
      sortTable: function sortTable(event) {
        const attributes = event.target.attributes;
        const sortType = attributes.sortType.value;
        const reference = attributes._ref.value;
        const sorted = attributes.sorted.value;
        const direction = (sorted === 'down') ? 1 : -1;

        let sortFunction = 'dynamicSortAlphabetic';
        if (sortType === 'date') { sortFunction = 'dynamicSortDates'; }
        if (sortType === 'number') { sortFunction = 'dynamicSortNumbers'; }
        if (sortType === 'array') { sortFunction = 'dynamicSortArray'; }

        if (direction === 1) {
          event.target.attributes.sorted.nodeValue = 'up';
        } else {
          event.target.attributes.sorted.nodeValue = 'down';
        }

        this.$store.commit(sortFunction, {
          reference: reference,
          direction: direction,
        });
      },
    },
  }
</script>

<style>

</style>
