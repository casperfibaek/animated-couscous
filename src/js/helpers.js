/* eslint-env browser */

module.exports = {


  getCredentials: function getCredentials(str) {
    const form = document.getElementsByClassName(str)[0];
    const credentials = {};
    for (let i = 0; i < form.elements.length; i += 1) {
      const e = form.elements[i];
      if (e.getAttribute('name') === 'username') {
        credentials.username = e.value;
      }
      if (e.getAttribute('name') === 'password') {
        credentials.password = e.value;
      }
    }
    return credentials;
  },


  // Ege Özcan @ StackOverflow
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


  dynamicSortDates: function dynamicSortDates(property, order = 1) {
    let sortOrder = order;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1); // eslint-disable-line
    }

    return function sort(a, b) {
      let result;
      const A = Date.parse(a[property].split('-').reverse().toString());
      const B = Date.parse(b[property].split('-').reverse().toString());
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
