<template>
  <div class='empty base'>
    <h5 class="text-bold">Current sites</h5>
    <table class="table table-striped table-hover siteTable">
      <thead>
        <tr>
          <th v-for="(value, key) in sites[0]" sorted="down" class="table-head sites" v-bind:reference="key" v-on:click='sortTable'>
            <span>{{ key }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='site in sites' class='siteTable-row'>
          <td v-for='value in site'>
            <span>{{ value }}</span>
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
  export default {
    name: 'sites-page',
    created() {
      const db = require('../database');
      // db(row => this.addSite(row));
    },
    computed: {
      sites: function() { return this.$store.getters.sites; },
    },
    methods: {
      addSite: function (site) {
        this.$store.commit('addSite', site);
      },
      sortTable: function sortTable(event) {
        const target = event.target.attributes;
        const reference = target.reference.nodeValue;
        const sorted = target.sorted.nodeValue;

        if (sorted === 'down') {
          event.target.attributes.sorted.nodeValue = 'up';
          if (reference === 'Name' || reference === 'Satellite') {
            this.$store.commit('dynamicSortAlphabetic', {
              reference: reference,
              direction: 1,
            });
          } else if (reference === 'Latest' || reference === 'Start') {
            this.$store.commit('dynamicSortDates', {
              reference: reference,
              direction: 1,
            });
          }
        } else {
          event.target.attributes.sorted.nodeValue = 'down';
          if (reference === 'Name' || reference === 'Satellite') {
            this.$store.commit('dynamicSortAlphabetic', {
              reference: reference,
              direction: -1,
            });
          } else if (reference === 'Latest' || reference === 'Start') {
            this.$store.commit('dynamicSortDates', {
              reference: reference,
              direction: -1,
            });
          }
        }
      },
    },
  }
</script>

<style>

</style>
