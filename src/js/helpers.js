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
};
