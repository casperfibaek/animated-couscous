/* eslint-disable no-console, consistent-return */

// in order to build the database it is necessary to build it using the below command.
// It is possibly required to install vs2015 default.

// npm install sqlite3 --build-from-source --runtime=electron --target=1.7.6 --dist-url=https://atom.io/download/electron
const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, './common.db');

/*
  sqlite3.OPEN_READONLY: open the database for read-only.
  sqlite3.OPEN_READWRITE : open the database for reading and writting.
  sqlite3.OPEN_CREATE: open the database, if the database does not exist, create a new database.
*/

function test(callback) {
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) { console.log(err); }
    console.log('Connected to the database.');
  });

  db.serialize(() => {
    db.each(`
      SELECT *
      FROM sites
      `, (err, row) => {
        if (err) {
          console.log(err);
        } else {
          callback({
            Name: row.name,
            Satellite: row.satellite,
            Latest: row.latest,
            Start: row.start,
          });
        }
      });
  });

  db.close((err) => {
    if (err) { console.log(err); } else {
      console.log('Closed the database connection.');
    }
  });
}

module.exports = test;
