/* eslint-disable no-console */
// const request = require('request-promise-native');
import request from 'request-promise-native';

export default async function(username, password) {  // eslint-disable-line
  const endPoint = `https://scihub.copernicus.eu/dhus/odata/v1/Users('${username}')?$format=json`;

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

    return user.d;
  } catch (err) {
    if (err.statusCode && err.statusCode === 401) {
      throw Error('Incorrect username or password');
    } else {
      throw Error('Error connecting to ESA database');
    }
  }
}
