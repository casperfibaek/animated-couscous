/* eslint-env node, browser */
/* eslint-disable no-console, consistent-return */

// npm config set python C:/Python27/python.exe
// npm install sqlite3 --build-from-source --runtime=electron --target=1.7.6 --dist-url=https://atom.io/download/electron
const sqlite3 = require('sqlite3').verbose();

/*
  sqlite3.OPEN_READONLY: open the database for read-only.
  sqlite3.OPEN_READWRITE : open the database for reading and writting.
  sqlite3.OPEN_CREATE: open the database, if the database does not exist, create a new database.
*/

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)');

  const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  for (let i = 0; i < 10; i += 1) {
    stmt.run(`Ipsum ${i}`);
  }
  stmt.finalize();

  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(`${row.id}: ${row.info}`);
  });
});

db.close();
