/* eslint-disable quotes */
import Sequelize from 'sequelize';

export default {
  users: {
    userID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    country: { type: Sequelize.STRING },
    domain: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    lastLogin: { type: Sequelize.DATE },
  },

  defaultUser: {
    username: 'test',
    password: 'test',
    email: 'caseyjdmcdermott@gmail.com',
    country: 'United Kingdom',
    domain: 'Atmosphere',
    firstname: 'Casey',
    lastname: 'McDermott',
    lastLogin: new Date(),
  },

  sites: {
    siteID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userID: { type: Sequelize.INTEGER, allowNull: false },
    sitename: { type: Sequelize.STRING, allowNull: false },
    notes: { type: Sequelize.STRING(512) },
    images: { type: Sequelize.TEXT },
    frequency: { type: Sequelize.INTEGER, allowNull: false },
    downloadtype: { type: Sequelize.STRING, allowNull: false },
    startDate: { type: Sequelize.DATE, allowNull: false },
    lastCheck: { type: Sequelize.DATE },
    footprint: { type: Sequelize.TEXT, allowNull: false },
    satellite: { type: Sequelize.STRING, allowNull: false },
    producttype: { type: Sequelize.STRING },
    polarisationmode: { type: Sequelize.STRING },
    sensoroperationalmode: { type: Sequelize.STRING },
    cloudcoverpercentage: { type: Sequelize.FLOAT },
    orbitdirection: { type: Sequelize.STRING },
  },

  images: {
    imageID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    acquisitiontype: { type: Sequelize.STRING },
    beginposition: { type: Sequelize.DATE },
    cloudcoverpercentage: { type: Sequelize.FLOAT },
    datatakesensingstart: { type: Sequelize.DATE },
    endposition: { type: Sequelize.DATE },
    filename: { type: Sequelize.TEXT },
    footprint: { type: Sequelize.TEXT },
    footprintJSON: { type: Sequelize.TEXT },
    format: { type: Sequelize.STRING },
    gmlfootprint: { type: Sequelize.TEXT },
    hv_order_tileid: { type: Sequelize.STRING },
    id: { type: Sequelize.STRING },
    identifier: { type: Sequelize.STRING },
    ingestiondate: { type: Sequelize.DATE },
    instrumentname: { type: Sequelize.STRING },
    instrumentshortname: { type: Sequelize.STRING },
    lastorbitnumber: { type: Sequelize.INTEGER },
    lastrelativeorbitnumber: { type: Sequelize.INTEGER },
    linkPrimary: { type: Sequelize.STRING },
    linkAlternative: { type: Sequelize.STRING },
    linkQuicklook: { type: Sequelize.STRING },
    missiondatatakeid: { type: Sequelize.INTEGER },
    orbitdirection: { type: Sequelize.STRING },
    orbitnumber: { type: Sequelize.INTEGER },
    platformidentifier: { type: Sequelize.STRING },
    platformname: { type: Sequelize.STRING },
    platformserialidentifier: { type: Sequelize.STRING },
    polarisationmode: { type: Sequelize.STRING },
    processed: { type: Sequelize.STRING },
    processingbaseline: { type: Sequelize.STRING },
    processinglevel: { type: Sequelize.STRING },
    productclass: { type: Sequelize.STRING },
    productconsolidation: { type: Sequelize.STRING },
    producttype: { type: Sequelize.STRING },
    relativeorbitnumber: { type: Sequelize.INTEGER },
    s2datatakeid: { type: Sequelize.STRING },
    sensoroperationalmode: { type: Sequelize.STRING },
    size: { type: Sequelize.STRING },
    slicenumber: { type: Sequelize.INTEGER },
    status: { type: Sequelize.STRING },
    swathidentifier: { type: Sequelize.STRING },
    tileid: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    uuid: { type: Sequelize.STRING, unique: true },
  },
};