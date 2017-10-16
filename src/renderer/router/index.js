/* eslint-disable global-require, import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/login.vue';
import allSites from '../components/allSites.vue';
import overview from '../components/overview.vue';
import createSentinel1 from '../components/createSentinel1.vue';
import createSentinel2 from '../components/createSentinel2.vue';
import singleSite from '../components/singleSite.vue';
import singleImage from '../components/singleImage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,
    },
    {
      path: '/allSites',
      name: 'allSites',
      component: allSites,
    },
    {
      path: '/createSentinel1',
      name: 'createSentinel1',
      component: createSentinel1,
    },
    {
      path: '/createSentinel2',
      name: 'createSentinel2',
      component: createSentinel2,
    },
    {
      path: '/singleSite',
      name: 'singleSite',
      component: singleSite,
    },
    {
      path: '/singleImage',
      name: 'singleImage',
      component: singleImage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
