/* eslint-disable no-console */
const esaUtils = require('./esaUtils.js');
const parse = require('./esaParse');
const rp = require('request-promise');

module.exports = {
  prepare(obj) {
    return new Promise(
      (resolve, reject) => {
        if (!obj.credentials) {
          reject(Error('please specify credentials'));
        }
        if (!obj.satellite) {
          reject(Error('please specify satellite'));
        }
        if (!obj.footprint) {
          reject(Error('please supply a footprint (polygon)'));
        }
        if (!obj.from) {
          reject(Error('please specify a from date (ISO8601)'));
        }

        const satellite = obj.satellite;
        if (satellite !== 'Sentinel-1' && satellite !== 'Sentinel-2') {
          reject(Error('Please provide a proper satellite reference.'));
        }

        let footprint;
        try {
          footprint = esaUtils.geoJsonToESA(obj.footprint);
        } catch (err) {
          reject(Error('Unable to parse footprint'));
        }

        const credentials = obj.credentials;
        const from = obj.from;

        const baseURL = 'https://scihub.copernicus.eu/dhus/search?q=';

        const queryOptions = {
          platform: `platformname:${satellite}`,
          footprint: ` AND footprint:${footprint}`,
          producttype: (obj.producttype) ?
          esaUtils.getOptions(obj, 'producttype') : '',
          time: ` AND beginposition:[${from} TO NOW]`,
        };

        if (satellite === 'S1' || satellite === 's1') {
          queryOptions.polarisationmode = (obj.polarisationmode) ?
              esaUtils.getOptions(obj, 'polarisationmode') : '';
          queryOptions.sensoroperationalmode = (obj.sensoroperationalmode) ?
              esaUtils.getOptions(obj, 'sensoroperationalmode') : '';
          queryOptions.orbitdirection = (obj.orbitdirection) ?
              esaUtils.getOptions(obj, 'orbitdirection') : '';
        } else if (satellite === 'S2' || satellite === 's2') {
          queryOptions.cloudcoverpercentage = (obj.cloudcoverpercentage) ?
            ` AND cloudcoverpercentage:[0 TO ${obj.cloudcoverpercentage}]` : '';
        }

        const basicOptions = {
          start: (obj.start) ? `&start=${obj.start}` : '&start=0',
          rows: (obj.rows) ? `&rows=${obj.rows}` : '&rows=100',
          format: '&format=json',
          order: '&orderby=beginposition desc',
        };

        resolve({
          method: 'GET',
          uri: baseURL +
            esaUtils.objToString(queryOptions) +
            esaUtils.objToString(basicOptions),
          auth: credentials,
          json: true,
        });
      },
    );
  },

  execute(obj, callback) {
    rp(obj)
      .then((response) => {
        callback(false, response);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
