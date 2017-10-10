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
    max: 5,
    min: 0,
    idle: 10000,
  },
  storage: dbPath,
});

export default {
  Users: sequelize.define('user', defaultDatabase.users, {
    timestamps: true,
  }),

  Sites: sequelize.define('sites', defaultDatabase.sites, {
    timestamps: true,
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
