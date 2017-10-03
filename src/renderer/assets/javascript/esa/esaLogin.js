/* eslint-disable no-console */
// const request = require('request-promise-native');
import request from 'request-promise-native';

function parseUserInfo(user) {
  return {
    country: user.Country,
    domain: user.Domain,
    email: user.Email,
    firstname: user.FirstName,
    lastname: user.LastName,
    lastLogin: Math.floor(new Date().getTime() / 1000),
  };
}

export default async function(username, password) {  // eslint-disable-line
  const endPoint = `https://scihub.copernicus.eu/dhus/odata/v1/Users('${username}')?$format=json`;

  const esaResponseTimeout = setTimeout(() => {
    throw Error('ESA took too long to respond');
  }, 30 * 1000);

  try {
    const user = await request({
      method: 'GET',
      uri: endPoint,
      auth: {
        user: username,
        pass: password,
      },
      json: true,
    });

    const userInfo = parseUserInfo(user.d);
    userInfo.password = password;
    userInfo.username = username;

    clearTimeout(esaResponseTimeout);
    return userInfo;
  } catch (err) {
    if (err.statusCode && err.statusCode === 401) {
      throw Error('Incorrect username or password');
    } else {
      throw err;
    }
  }
}
