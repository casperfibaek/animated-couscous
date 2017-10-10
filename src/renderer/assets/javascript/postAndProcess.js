import utils from './utils';
import DB from '../../database';
import esaSearch from './esa/esaSearch';

export default async function postAndProcess(vm, credentials, satellite) {
  try {
    const parsedForm = await utils.parseForm('createSite');

    parsedForm.satellite = satellite;
    parsedForm.footprint = vm.$store.getters.geometryPrepared;
    parsedForm.userID = credentials.userID;

    vm.$store.commit('setCurrentlyLoading', true);
    vm.$store.commit('setLoadingMessage', 'Inserting into database');

    const site = await DB.Sites.create(parsedForm);

    vm.$store.commit('setLoadingMessage', 'Requesting ESA imagery');
    const esaReply = await esaSearch(Object.assign(parsedForm, {
      username: credentials.username,
      password: credentials.password,
    }));

    vm.$store.commit('setLoadingMessage', 'Inserting images into database');

    const images = await DB.Images.bulkCreate(esaReply.images, {
      returning: true,
    });

    const insertedImages = [];
    images.forEach(image => insertedImages.push(image.imageID));

    const currentImages = await DB.Sites.findOne({
      attributes: ['images'],
    }, {
      where: { siteID: site.siteID },
    });

    const insert = (currentImages.images) ? `${currentImages},${insertedImages.toString()}` : insertedImages.toString();

    vm.$store.commit('setLoadingMessage', 'Updating lastCheck');
    await DB.Sites.update({
      lastCheck: new Date(),
      images: insert,
    }, {
      where: { siteID: site.siteID },
    });

    vm.$router.push({ path: 'sites' });
  } catch (err) {
    console.error(err); // eslint-disable-line
  } finally {
    vm.$store.commit('setGeometryAdded', false);
    vm.$store.commit('setGeometry', null);
    vm.$store.commit('setCurrentlyLoading', false); vm.$store.commit('setLoadingMessage', '');
  }
}
