const utils = require('./esaUtils');

module.exports = function parse(obj) {
  return new Promise((resolve, reject) => {
    if (!obj.feed) { reject(Error('Unable to parse')); }
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

        pImage.footprintJSON = utils.footprintToJSON(pImage.footprint);

        return pImage;
      });
    }

    resolve({
      query: feed['opensearch:Query'].searchTerms,
      link: feed.id,
      itemsPerPage: Number(feed['opensearch:itemsPerPage']),
      startIndex: Number(feed['opensearch:startIndex']),
      totalResults: Number(feed['opensearch:totalResults']),
      images,
    });
  },
  );
};
