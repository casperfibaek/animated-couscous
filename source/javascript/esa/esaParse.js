const utils = require('./esaUtils');

module.exports = {
  search(obj) {
    return new Promise(
      (reject, resolve) => {
        try {
          const feed = obj.feed;
          const entries = feed.entry;
          const images = [];

          entries.forEach((image) => {
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

            images.push(pImage);
          });

          resolve({
            query: feed['opensearch:Query'].searchTerms,
            link: feed.id,
            itemsPerPage: Number(feed['opensearch:itemsPerPage']),
            startIndex: Number(feed['opensearch:startIndex']),
            totalResults: Number(feed['opensearch:totalResults']),
            images,
          });
        } catch (err) {
          reject(Error('Could not parse response'));
        }
      },
    );
  },
};
