/* eslint-disable no-console, consistent-return */

// in order to build the database it is necessary to build it using the below command.
// It is possibly required to install vs2015 default.

// npm install sqlite3 --build-from-source --runtime=electron --target=1.7.6 --dist-url=https://atom.io/download/electron
const sqlite = require('sqlite3');
const path = require('path');
const fs = require('fs');
const remote = require('electron').remote;  // eslint-disable-line

const appPath = remote.app.getPath('userData');
const dbFolder = path.join(appPath, '/database');

if (!fs.existsSync(dbFolder)) { fs.mkdirSync(dbFolder); }

const dbPath = path.join(dbFolder, '/common.db');
console.log(dbPath);

// const dbPath = path.join(__dirname, './common.db');


/*
  sqlite3.OPEN_READONLY: open the database for read-only.
  sqlite3.OPEN_READWRITE : open the database for reading and writting.
  sqlite3.OPEN_CREATE: open the database, if the database does not exist, create a new database.
*/

/*
  TODO:
    Create a complete database sqlite module
      - initialize database;
      - verify database;
      - insert various infomation;
      tables:
        Users
        Sites (store unique ID of each site)
        Images (create new short ID from UID)

    '1,2,3,4'.split(',').map(str => Number(str));
    --> [1,2,3,4];
*/

function test(callback) {
  let db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
    if (err) {
      console.log('could not connect to database, creating new');

      db = new sqlite.Database(dbPath);

      db.serialize(() => {
        db.run('CREATE TABLE lorem (info TEXT)');

        const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
        for (let i = 0; i < 10; i += 1) {
          stmt.run(`Ipsum ${i}`);
        }
        stmt.finalize();

        db.each('SELECT rowid AS id, info FROM lorem', (rowErr, row) => {
          if (rowErr) { console.log(rowErr); }
          console.log(`${row.id}: ${row.info}`);
        });
      });
    } else {
      db.serialize(() => {
        db.each(`
          SELECT *
          FROM sites
          `, (rowErr, row) => {
            if (rowErr) {
              console.log(rowErr);
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
    }
  });


  db.close((err) => {
    if (err) { console.log(err); } else {
      console.log('Closed the database connection.');
    }
  });
}

module.exports = test;
