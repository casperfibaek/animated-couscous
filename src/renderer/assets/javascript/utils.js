/* eslint-env browser */

module.exports = {

  // Based on: Ege Özcan @ StackOverflow
  dynamicSortAlphabetic: function dynamicSortAlphabetic(property, order = 1) {
    let sortOrder = order;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1); // eslint-disable-line
    }

    return function sort(a, b) {
      let result;
      const A = a[property].toLowerCase();
      const B = b[property].toLowerCase();

      if (A < B) {
        result = -1;
      } else if (A > B) {
        result = 1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    };
  },

  dynamicSortNumbers: function dynamicSortNumbers(property, order = 1) {
    let sortOrder = order;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1); // eslint-disable-line
    }

    return function sort(a, b) {
      const A = a[property];
      const B = b[property];

      let result;
      if (A < B) {
        result = -1;
      } else if (A > B) {
        result = 1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    };
  },

  dynamicSortArray: function dynamicSortArray(property, order = 1) {
    let sortOrder = order;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1); // eslint-disable-line
    }

    return function sort(a, b) {
      const A = a[property].toString().toLowerCase();
      const B = b[property].toString().toLowerCase();

      let result;
      if (A < B) {
        result = -1;
      } else if (A > B) {
        result = 1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    };
  },

};
