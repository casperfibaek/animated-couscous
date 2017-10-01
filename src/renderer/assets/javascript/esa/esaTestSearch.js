import user from './credentials';

const today = new Date();
const lastWeek = new Date(today.setDate(today.getDate() - 50));

export default {
  s1: {
    credentials: user,
    from: lastWeek.toISOString(),
    satellite: 'Sentinel-1',
    footprint: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [
          10.85947036743164,
          55.00361343394534,
        ],
      },
    },
    polarisationmode: ['HH', 'VV', 'HV', 'VH', 'HH+HV', 'VV+VH'],
    producttype: ['SLC', 'GRD', 'OCN', 'RAW'],
    sensoroperationalmode: ['SM', 'IW', 'EW'],
    orbitdirection: ['Ascending', 'Descending'],
  },

  s2: {
    credentials: user,
    from: lastWeek.toISOString(),
    satellite: 'Sentinel-2',
    footprint: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [10.834236145019531, 55.01394956750485],
          [10.823936462402344, 55.00725599449082],
          [10.815696716308594, 54.99120655714044],
          [10.823593139648438, 54.98214514427189],
          [10.842647552490234, 54.99110807451881],
          [10.851058959960936, 55.01168568990178],
          [10.834236145019531, 55.01394956750485],
        ]],
      },
    },
    producttype: ['S2MSI1C', 'S2MSI2Ap'],
    cloudcoverpercentage: 25,
  },
};
