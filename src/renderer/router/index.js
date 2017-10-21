/* eslint-disable global-require, import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/login.vue';
import overview from '../components/overview.vue';
import createSentinel from '../components/createSentinel.vue';
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
      path: '/createSentinel',
      name: 'createSentinel',
      component: createSentinel,
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
