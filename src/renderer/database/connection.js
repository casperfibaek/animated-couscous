import sqlite from 'sqlite3'; // eslint-disable-line
import Sequelize from 'sequelize';
import path from 'path';
import { remote } from 'electron'; // eslint-disable-line

import defaultDatabase from './defaultDatabase';

const appPath = remote.app.getPath('userData');
const dbFolder = path.join(appPath, '/database');
const dbPath = path.join(dbFolder, '/common.db');

const sequelize = new Sequelize('common', 'sentinel-data-manager', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 10,
    min: 0,
    idle: 25000,
  },
  storage: dbPath,
  logging: false,
});

export default {
  Users: sequelize.define('user', defaultDatabase.users, {
    timestamps: true,
    indexes: [{
      unique: true,
      fields: ['username', 'userID'],
    }],
  }),

  Sites: sequelize.define('sites', defaultDatabase.sites, {
    timestamps: true,
    indexes: [{
      unique: true,
      fields: ['userID', 'siteID'],
    }],
  }),

  Images: sequelize.define('images', defaultDatabase.images, {
    timestamps: true,
    indexes: [{
      unique: true,
      fields: ['imageID', 'uuid'],
    }],
  }),

  sequelize,
};
