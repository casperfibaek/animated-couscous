/* eslint-disable global-require, import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/login').default,
    },
    {
      path: '/allSites',
      name: 'allSites',
      component: require('@/components/allSites').default,
    },
    {
      path: '/createSentinel1',
      name: 'createSentinel1',
      component: require('@/components/createSentinel1').default,
    },
    {
      path: '/createSentinel2',
      name: 'createSentinel2',
      component: require('@/components/createSentinel2').default,
    },
    {
      path: '/singleSite',
      name: 'singleSite',
      component: require('@/components/singleSite').default,
    },
    {
      path: '/singleImage',
      name: 'singleImage',
      component: require('@/components/singleImage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
