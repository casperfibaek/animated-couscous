<template>
  <div id='overview'>
    <div class="overview-site base">
      <div class="overview-site-stats">
        <div class="statContainer">
          <div class='head'><span>Sitename</span></div>
          <div class='body'><span>{{ clickedSite.sitename }}</span></div>
        </div>
        <div class="statContainer">
          <div class='head'><span>Satellite</span></div>
          <div class='body'><span>{{ clickedSite.satellite }}</span></div>
        </div>
        <div class="statContainer">
          <div class='head'><span>Frequency</span></div>
          <div class='body'><span>Every {{ clickedSite.frequency }} hours</span></div>
        </div>
        <div class="statContainer">
          <div class='head'><span>Start date</span></div>
          <div class='body'><span>{{ parseDate(clickedSite.startDate) }}</span></div>
        </div>
        <div class="statContainer">
          <div class='head'><span>Last check</span></div>
          <div class='body'><span>{{ parseDate(clickedSite.lastCheck) }}</span></div>
        </div>
        <div class="statContainer">
          <div class='head'><span>Product</span></div>
          <div class='body'><span>{{ clickedSite.producttype }}</span></div>
        </div>
      </div>
    </div>
    <div class="overview-siteImages base">
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
    margin-bottom: 10px;
  }
  .overview-siteImages{
    margin-top: 20px;
    height: 36px;
  }

  .overview-site-stats{
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.statContainer{
  margin: 10px;
  min-width: 130px;
}

.statContainer > .head {
  font-weight: 700;
}

.statContainer > .body {
  font-weight: 500;
}
</style>
