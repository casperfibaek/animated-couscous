import utils from './utils';
import db from '../../database';
import esaSearch from './esa/esaSearch';
import defaultDB from '../../database/defaultDatabase';

export default async function postAndProcess(vm, credentials, satellite) {
  try {
    const parsedForm = await utils.parseForm('createSite');

    parsedForm.satellite = satellite;
    parsedForm.footprint = vm.$store.getters.geometryPrepared;
    parsedForm.userID = credentials.userID;

    vm.$store.commit('setCurrentlyLoading', true);
    vm.$store.commit('setLoadingMessage', 'Inserting into database');
    let siteID = await db.insertInto('sites', parsedForm);
    siteID = Object.values(siteID)[0];

    vm.$store.commit('setLoadingMessage', 'Requesting ESA imagery');
    const esaReply = await esaSearch(Object.assign(parsedForm, {
      username: credentials.username,
      password: credentials.password,
    }));

    vm.$store.commit('setLoadingMessage', 'Inserting images into database');
    await db.createImageSiteAndInsert(
      `images_${parsedForm.userID}_${siteID}`, // tableName
      defaultDB.images,
      esaReply.images,
    );

    vm.$store.commit('setLoadingMessage', 'Updating lastCheck');
    await db.updateLastCheck(siteID);

    vm.$router.push({ path: 'sites' });
  } catch (err) {
    console.error(err); // eslint-disable-line
  } finally {
    vm.$store.commit('setGeometryAdded', false);
    vm.$store.commit('setGeometry', null);
    vm.$store.commit('setCurrentlyLoading', false); vm.$store.commit('setLoadingMessage', '');
  }
}
