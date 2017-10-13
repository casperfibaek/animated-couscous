/* eslint-disable no-console */

import utils from './utils';
import DB from '../../database';
import esaSearch from './esa/esaSearch';

export default async function postAndProcess(vm, credentials, satellite) {
  try {
    vm.$store.commit('setCurrentlyLoading', true);
    vm.$store.commit('setLoadingMessage', 'Parsing form');

    const parsedForm = await utils.parseForm('createSite');

    parsedForm.satellite = satellite;
    parsedForm.footprint = vm.$store.getters.geometryPrepared;
    parsedForm.userID = credentials.userID;

    vm.$store.commit('setLoadingMessage', 'Requesting ESA imagery');
    const esaReply = await esaSearch(Object.assign(parsedForm, {
      username: credentials.username,
      password: credentials.password,
    }));

    vm.$store.commit('setLoadingMessage', 'Inserting images into database');
    if (esaReply.images) {
      const newImages = await DB.Images.bulkCreate(esaReply.images, {
        returning: true,
      });
      const insertedImages = newImages.map(image => image.imageID);
      parsedForm.images = insertedImages.toString();
    } else {
      parsedForm.images = '';
    }

    parsedForm.lastCheck = new Date();

    vm.$store.commit('setLoadingMessage', 'Creating site');
    await DB.Sites.create(parsedForm);

    vm.$router.push({ path: 'sites' });
  } catch (err) {
    console.error(err); // eslint-disable-line
  } finally {
    vm.$store.commit('setGeometryAdded', false);
    vm.$store.commit('setGeometry', null);
    vm.$store.commit('setCurrentlyLoading', false); vm.$store.commit('setLoadingMessage', '');
  }
}
