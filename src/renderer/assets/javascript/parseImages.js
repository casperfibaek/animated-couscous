function leftPad(int) {
  if (int < 10) { return `0${int}`; }
  return String(int);
}

function parseDate(str) {
  if (str === null || str === 'null') { return 'NA'; }

  const parsed = new Date(str);

  const hours = leftPad(parsed.getHours());
  const minutes = leftPad(parsed.getMinutes());
  const days = leftPad(parsed.getDay() + 1);
  const months = leftPad(parsed.getMonth() + 1);
  const year = leftPad(parsed.getFullYear());

  return `${year}/${months}/${days}-${hours}:${minutes}`;
}

export default function (obj) {
  if (obj.platformname === 'Sentinel-1') {
    return {
      Time: parseDate(obj.endposition),
      Satellite: obj.platformname,
      Instrument: obj.instrumentname,
      Type: obj.producttype,
      Polarisation: obj.polarisationmode,
      Sensor: obj.sensoroperationalmode,
      Size: obj.size,
      // Link: `<a href='${obj.linkPrimary}'>link text</a>`,
      // Thumbnail: `<a href='${obj.linkQuicklook}'>link text</a>`,
      Uuid: obj.uuid,
    };
  }
  return {
    Time: parseDate(obj.endposition),
    Satellite: obj.platformname,
    Instrument: obj.instrumentname,
    Type: obj.producttype,
    Clouds: obj.cloudcoverpercentage,
    Tile: obj.tileid,
    Size: obj.size,
    // Link: `<a href='${obj.linkPrimary}'>link text</a>`,
    // Thumbnail: `<a href='${obj.linkQuicklook}'>link text</a>`,
    Uuid: obj.uuid,
  };
}
