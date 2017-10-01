/* eslint-disable no-console, consistent-return */
const sqlite = require('sqlite3');
const path = require('path');
const fs = require('fs');
const remote = require('electron').remote;  // eslint-disable-line
const req = require('./structure');

const appPath = remote.app.getPath('userData');
const dbFolder = path.join(appPath, '/database');

if (!fs.existsSync(dbFolder)) { fs.mkdirSync(dbFolder); }
const dbPath = path.join(dbFolder, '/common.db');
console.log(dbPath);


const createTable = function createTable(name, obj) {
  let columns = '';

  Object.entries(obj)
    .forEach((arr) => {
      columns += `${arr[0]} ${arr[1]}, `;
    });

  return `CREATE TABLE ${name} (${columns.slice(0, -2)});`;
};

const insert = function insert(table, obj) {
  let columns = '';
  let values = '';

  Object.entries(obj).forEach((arr) => {
    columns += `"${arr[0]}", `;
    if (Number.isInteger(arr[1])) {
      values += `${arr[1]}, `;
    } else {
      values += `"${arr[1]}", `;
    }
  });

  return `INSERT INTO ${table} (${columns.slice(0, -2)}) VALUES (${values.slice(0, -2)})`;
};

try {
  const db = new sqlite.Database(dbPath);

  db.serialize(() => {
    db.run(createTable('users', req.users));
    db.run(insert('users', req.defaultUser));

    db.run(createTable('sites', req.sites));
    db.run(insert('sites', req.defaultSiteS1));
    db.run(insert('sites', req.defaultSiteS2));

    db.run(createTable('images', req.images));

    db.close();
  });
} catch (err) {
  console.error(err);
}


export default createTable;
