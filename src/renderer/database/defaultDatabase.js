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
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
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
  defaultSiteS1: {
    userID: 1,
    sitename: 'Kristianssaede',
    notes: 'Stor skov paa Lolland',
    frequency: 24,
    downloadtype: 'metadata',
    startDate: new Date(Date.parse('2017-09-02')),
    lastCheck: new Date(Date.parse('2017-09-12')),
    footprint: `{'type':'Feature','properties':{},'geometry':{'type':'Polygon','coordinates':[[[11.36037826538086,54.82284347568134],[11.285018920898438,54.785938704274166],[11.358146667480469,54.7427579544346],[11.430587768554688,54.77277147807947],[11.406383514404297,54.812359220481845],[11.36037826538086,54.82284347568134]]]}}`,
    satellite: 'Sentinel-1',
    producttype: 'SLC,GRD,OCN,RAW',
    polarisationmode: 'HH,VV,HV,VH,HH+HV,VV+VH',
    sensoroperationalmode: 'SM,IW,EW',
    orbitdirection: 'Ascending,Descending',
  },
  defaultSiteS2: {
    userID: 1,
    sitename: 'Bidstrup Skovene',
    notes: 'Skov paa Sjaelland',
    frequency: 24,
    downloadtype: 'metadata',
    startDate: Date.parse('2017-07-14'),
    lastCheck: Date.parse('2017-09-13'),
    footprint: `{type:Feature,properties:{},geometry:{type:Polygon,coordinates:[[[11.87295913696289,55.58795011451677],[11.830558776855469,55.555048994867036],[11.891841888427733,55.52882484083191],[11.934242248535156,55.56990158550945],[11.87295913696289,55.58795011451677]]]}}`,
    satellite: 'Sentinel-2',
    producttype: 'S2MSI1C,S2MSI2Ap',
    cloudcoverpercentage: 25,
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
