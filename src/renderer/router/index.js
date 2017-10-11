/* eslint-disable global-require, import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: require('@/components/loginPage').default,
    },
    {
      path: '/sites',
      name: 'SitesPage',
      component: require('@/components/sitesPage').default,
    },
    {
      path: '/createSentinel1',
      name: 'createSentinel1-page',
      component: require('@/components/createSentinel1').default,
    },
    {
      path: '/createSentinel2',
      name: 'createSentinel2-page',
      component: require('@/components/createSentinel2').default,
    },
    {
      path: '/inspect/:siteID',
      name: 'siteInspection-page',
      component: require('@/components/inspection').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
