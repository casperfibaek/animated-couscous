/* eslint-disable no-console, consistent-return */
import sqlite from 'sqlite3'; // eslint-disable-line
import path from 'path';
import fs from 'fs';
import { remote } from 'electron'; // eslint-disable-line
import qc from './queryConstructor';
import defaultDatabase from './defaultDatabase';

sqlite.verbose();

const appPath = remote.app.getPath('userData');
const dbFolder = path.join(appPath, '/database');
const dbPath = path.join(dbFolder, '/common.db');

function getUser(tableName, obj) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READONLY,
    });

    const query = qc.selectEntry(tableName, obj);

    db.get(query, (err, data) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve(data));
      }
    });
  });
}

function getLatestUser(tableName, max) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READONLY,
    });

    const query = qc.selectMax(tableName, max);

    db.get(query, (err, data) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve(data));
      }
    });
  });
}

function getUserSites(tableName, obj) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READONLY,
    });

    const query = qc.selectEntry(tableName, obj);

    db.all(query, (err, data) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve(data));
      }
    });
  });
}

function updateUser(userID, obj) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READWRITE,
    });

    const query = qc.updateUserValue(userID, obj);

    db.get(query, (err) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve('Completed updateUser'));
      }
    });
  });
}

function updateLastCheck(siteID) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READWRITE,
    });

    const query = qc.updateLastCheck(siteID);

    db.run(query, (err) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve('Completed updateLastCheck'));
      }
    });
  });
}

function insertInto(tableName, obj) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READWRITE,
    });

    const query = qc.insertInto(tableName, obj);

    db.run(query, (err) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.get('SELECT last_insert_rowid();', (getErr, data) => {
          if (getErr) { db.close(reject(getErr)); } else {
            db.close(resolve(data));
          }
        });
      }
    });
  });
}

function createImageSiteAndInsert(tableName, createObj, insertArray) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(dbPath, {
      mode: sqlite.OPEN_READWRITE,
    });

    let query;

    const create = qc.createTable(tableName, createObj);
    if (insertArray.length !== 0) {
      const insert = qc.insertIntoArray(tableName, insertArray);
      query = `${create} ${insert}`;
    } else {
      query = `${create}`;
    }

    db.exec(query, (err) => {
      if (err) {
        db.close(reject(err));
      } else {
        db.close(resolve('create table'));
      }
    });
  });
}

function initialize() {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(dbPath)) {
      if (!fs.existsSync(dbFolder)) { fs.mkdirSync(dbFolder); }

      try {
        const db = new sqlite.Database(dbPath);

        db.serialize(() => {
          db.run(qc.createTable('users', defaultDatabase.users));
          db.run(qc.insertInto('users', defaultDatabase.defaultUser));
          db.run(qc.createTable('sites', defaultDatabase.sites));
          db.run(qc.insertInto('sites', defaultDatabase.defaultSiteS1));
          db.run(qc.insertInto('sites', defaultDatabase.defaultSiteS2));

          db.close((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } catch (err) {
        reject(err);
      }
    } else {
      // TODO: Change this to a function that tests the integrity of the db.
      // TODO: Create indices
      resolve();
    }
  });
}

const exportObject = {
  initialize,
  getUser,
  getUserSites,
  getLatestUser,
  updateUser,
  updateLastCheck,
  insertInto,
  createImageSiteAndInsert,
};

export default exportObject;
