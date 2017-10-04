/* eslint-disable quotes */
export default {
  users: {
    userID: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE',
    country: 'TEXT NOT NULL',
    domain: 'TEXT NOT NULL',
    email: 'TEXT NOT NULL',
    firstname: 'TEXT NOT NULL',
    lastname: 'TEXT NOT NULL',
    username: 'TEXT NOT NULL',
    password: 'TEXT NOT NULL',
    lastLogin: 'INTEGER NOT NULL',
  },
  defaultUser: {
    username: 'test',
    password: 'test',
    email: 'caseyjdmcdermott@gmail.com',
    country: 'United Kingdom',
    domain: 'Atmosphere',
    firstname: 'Casey',
    lastname: 'McDermott',
    lastLogin: Math.floor(new Date().getTime() / 1000),
  },
  sites: {
    siteID: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE',
    userID: 'INTEGER NOT NULL',
    sitename: 'TEXT NOT NULL',
    notes: 'TEXT',
    frequency: 'INTEGER NOT NULL',
    downloadtype: 'TEXT NOT NULL',
    startDate: 'TEXT NOT NULL',
    lastCheck: 'TEXT',
    footprint: 'TEXT NOT NULL',
    satellite: 'TEXT NOT NULL',
    producttype: 'TEXT NOT NULL',
    polarisationmode: 'TEXT',
    sensoroperationalmode: 'TEXT',
    cloudcoverpercentage: 'INTEGER',
    orbitdirection: 'TEXT',
  },
  defaultSiteS1: {
    userID: 1,
    sitename: 'Kristianssaede',
    notes: 'Stor skov paa Lolland',
    frequency: 24,
    downloadtype: 'metadata',
    startDate: '2017-09-02',
    lastCheck: '2017-09-12',
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
    startDate: '2017-09-04',
    lastCheck: '2017-09-13',
    footprint: `{type:Feature,properties:{},geometry:{type:Polygon,coordinates:[[[11.87295913696289,55.58795011451677],[11.830558776855469,55.555048994867036],[11.891841888427733,55.52882484083191],[11.934242248535156,55.56990158550945],[11.87295913696289,55.58795011451677]]]}}`,
    satellite: 'Sentinel-2',
    producttype: 'S2MSI1C,S2MSI2Ap',
    cloudcoverpercentage: 25,
  },
  images: {
    imageID: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE',
    acquisitiontype: 'TEXT',
    beginposition: 'TEXT NOT NULL',
    datatakesensingstart: 'TEXT',
    endposition: 'TEXT NOT NULL',
    filename: 'TEXT NOT NULL',
    footprint: 'TEXT NOT NULL',
    footprintJSON: 'TEXT NOT NULL',
    format: 'TEXT NOT NULL',
    gmlfootprint: 'TEXT',
    id: 'TEXT NOT NULL UNIQUE',
    identifier: 'TEXT',
    ingestiondate: 'TEXT',
    instrumentname: 'TEXT',
    instrumentshortname: 'TEXT',
    lastorbitnumber: 'TEXT',
    lastrelativeorbitnumber: 'TEXT',
    linkPrimary: 'TEXT',
    linkAlternative: 'TEXT',
    linkQuicklook: 'TEXT',
    missiondatatakeid: 'TEXT',
    orbitdirection: 'TEXT',
    orbitnumber: 'INTEGER',
    platformidentifier: 'TEXT',
    platformname: 'TEXT',
    polarisationmode: 'TEXT',
    productclass: 'TEXT',
    producttype: 'TEXT',
    relativeorbitnumber: 'INTEGER',
    sensoroperationalmode: 'TEXT',
    size: 'TEXT',
    slicenumber: 'TEXT',
    status: 'TEXT',
    swathidentifier: 'TEXT',
    title: 'TEXT NOT NULL UNIQUE',
    uuid: 'TEXT NOT NULL UNIQUE',
    cloudcoverpercentage: 'INTEGER',
    hv_order_tileid: 'TEXT',
    platformserialidentifier: 'TEXT',
    processingbaseline: 'TEXT',
    processinglevel: 'TEXT',
    s2datatakeid: 'TEXT',
    tileid: 'TEXT',
  },
};
