module.exports = {
  getOptions: function getOptions(obj, str) {
    let retString = '';
    if (obj[str]) {
      const objStr = obj[str];
      if (objStr instanceof Array) {
        if (objStr.length !== 0) {
          if (objStr.length === 1) {
            retString = ` AND ${str}:${objStr[0]}`;
          } else {
            for (let i = 0; i < objStr.length; i += 1) {
              if (i === 0) {
                retString += ` AND (${str}:${objStr[i]} OR `;
              } else if (i === objStr.length - 1) {
                retString += `${str}:${objStr[i]})`;
              } else {
                retString += `${str}:${objStr[i]} OR `;
              }
            }
          }
        }
      }
    }
    return retString;
  },

  objToString: function objToString(obj) {
    let str = '';
    Object.entries(obj).forEach((e) => {
      str += e[1];
    });
    return str;
  },

  geoJsonToESA: function geoJsonToESA(obj) {
    if (!obj.geometry || !obj.geometry.type) {
      throw Error('Error reading geojson');
    }

    const type = obj.geometry.type;
    if (type !== 'Polygon' && type !== 'Point') {
      throw Error('Improper geometry typr');
    }

    let coordinates;
    if (type === 'Point') {
      coordinates = [...obj.geometry.coordinates]
        .reverse()
        .toString()
        .replace(/,/g, ', ');
      return `"intersects(${coordinates})"`;
    }

    coordinates = [];
    [...obj.geometry.coordinates[0]]
      .reverse()
      .forEach((arr) => {
        coordinates.push(arr.toString().replace(/,/g, ' '));
      });
    coordinates.toString();

    return `"Intersects(POLYGON((${coordinates}))"`;
  },
};
