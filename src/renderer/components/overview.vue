<template>
  <div id='overview'>
    <div class="overview-site">
      <table class="table table-striped table-hover siteTable">
        <thead>
          <tr>
            <th sorted="down" class="table-head" _ref="sitename"sortType="string">
              <span>Sitename</span>
            </th>
            <th sorted="down" class="table-head" _ref="satellite" sortType="string">
              <span>Satellite</span>
            </th>
            <th sorted="down" class="table-head" _ref="frequency" sortType="number">
              <span>Frequency</span>
            </th>
            <th sorted="down" class="table-head" _ref="downloadtype" sortType="string">
              <span>Download type</span>
            </th>
            <th sorted="down" class="table-head" _ref="startDate" sortType="number">
              <span>Start date</span>
            </th>
            <th sorted="down" class="table-head" _ref="lastCheck" sortType="number">
              <span>Last check</span>
            </th>
            <th sorted="down" class="table-head" _ref="producttype" sortType="array">
              <span>Producttype</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class='siteTable-row'>
            <td><span>{{ clickedSite.sitename }}</span></td>
            <td><span>{{ clickedSite.satellite }}</span></td>
            <td><span>{{ clickedSite.frequency }}</span></td>
            <td><span>{{ clickedSite.downloadtype }}</span></td>
            <td><span>{{ parseDate(clickedSite.startDate) }}</span></td>
            <td><span>{{ parseDate(clickedSite.lastCheck) }}</span></td>
            <td><span>{{ clickedSite.producttype }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="overview-siteImages">
      <span>Here are the images belonging to the site</span>
    </div>
  </div>
</template>

<script>
  // import DB from '../assets/javascript/database';
  import parseDates from '../assets/javascript/utils/parseDate';

  export default {
    name: 'overview',
    computed: {
      clickedSite() { return this.$store.getters.getClickedSite; },
      sites() { return this.$store.getters.getSites; },
    },
    methods: {
      parseDate(date) {
        if (date === null || date === 'null') { return 'NA'; }
        return parseDates(date);
      },
    },
  };
</script>

<style>
  .overview-site{
    background: #fff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 1px solid #d2d2d2;
    margin-bottom: 10px;
  }
  .overview-siteImages{
    background: #fff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 1px solid #d2d2d2;
    margin-top: 20px;
    height: 36px;
    
  }
</style>
