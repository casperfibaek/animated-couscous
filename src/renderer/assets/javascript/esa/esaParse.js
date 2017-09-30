import utils from './esaUtils';

export default function parse(obj) {
  if (!obj.feed) { return Error('Unable to parse'); }
  const feed = obj.feed;

  let images = [];
  if (feed.entry) {
    const entries = feed.entry;
    images = entries.map((image) => {
      const pImage = {
        id: image.id,
        title: image.title,
        links: {
          primary: image.link['0'].href,
          alternative: image.link['1'].href,
          quicklook: image.link['2'].href,
        },
      };

      utils.mergeESA(image.date, pImage, 'date');
      utils.mergeESA(image.int, pImage, 'int');
      utils.mergeESA(image.str, pImage, 'str');
      if (image.double) {
        pImage.cloudcoverpercentage = Number(image.double.content);
      }

      pImage.footprintJSON = utils.footprintToJSON(pImage.footprint);

      return pImage;
    });
  }

  return {
    itemsPerPage: Number(feed['opensearch:itemsPerPage']),
    startIndex: Number(feed['opensearch:startIndex']),
    totalResults: Number(feed['opensearch:totalResults']),
    images,
  };
}
