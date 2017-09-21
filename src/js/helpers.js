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
  // sortArray: function sortArray(a, b, reference) {
  //   if (reference === 'Name') {
  //     if (a.Name > b.Name) { return 1; }
  //     if (a.Name === b.Name) { return 0; }
  //     return -1;
  //   }
  //   if (reference === 'Satellite') {
  //     if (a.Satellite > b.Satellite) { return 1; }
  //     if (a.Satellite === b.Satellite) { return 0; }
  //     return -1;
  //   }
  //   return 1;
  // },
};
