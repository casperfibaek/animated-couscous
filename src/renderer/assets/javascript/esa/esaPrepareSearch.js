/* eslint-disable no-console */
import utils from './esaUtils';

export default function prepare(obj, start) {
  if (!obj.username) {
    return Error('please specify username');
  }
  if (!obj.password) {
    return Error('please specify password');
  }
  if (!obj.satellite) {
    return Error('please specify satellite');
  }
  if (!obj.footprint) {
    return Error('please supply a footprint (polygon)');
  }
  if (!obj.startDate && !obj.lastCheck) {
    return Error('please specify a from date (INTEGER)');
  }

  const satellite = obj.satellite;
  if (satellite !== 'Sentinel-1' && satellite !== 'Sentinel-2') {
    return Error('Please provide a proper satellite reference.');
  }

  let footprint;
  try {
    footprint = utils.geoJsonToESA(JSON.parse(obj.footprint.replace(/'/g, '"')));
  } catch (error) {
    return Error(error);
  }

  const baseURL = 'https://scihub.copernicus.eu/dhus/search?q=';
  const from = (obj.lastCheck) ? obj.lastCheck : obj.startDate;

  const queryOptions = {
    platform: `platformname:${satellite}`,
    footprint: ` AND footprint:${footprint}`,
    producttype: (obj.producttype) ?
      utils.getOptions(obj, 'producttype') : '',
    time: ` AND beginposition:[${new Date(from).toISOString()} TO NOW]`,
  };

  if (satellite === 'Sentinel-1') {
    queryOptions.polarisationmode = (obj.polarisationmode) ?
      utils.getOptions(obj, 'polarisationmode') : '';
    queryOptions.sensoroperationalmode = (obj.sensoroperationalmode) ?
      utils.getOptions(obj, 'sensoroperationalmode') : '';
    queryOptions.orbitdirection = (obj.orbitdirection) ?
      utils.getOptions(obj, 'orbitdirection') : '';
  } else if (satellite === 'Sentinel-2') {
    queryOptions.cloudcoverpercentage = (obj.cloudcoverpercentage) ?
      ` AND cloudcoverpercentage:[0 TO ${obj.cloudcoverpercentage}]` : '';
  }

  const basicOptions = {
    start: (start) ? `&start=${start}` : '&start=0',
    rows: (obj.rows) ? `&rows=${obj.rows}` : '&rows=100',
    format: '&format=json',
    order: '&orderby=beginposition desc',
  };

  return {
    method: 'GET',
    uri: baseURL +
          utils.objToString(queryOptions) +
          utils.objToString(basicOptions),
    auth: {
      user: obj.username,
      pass: obj.password,
    },
    json: true,
  };
}
