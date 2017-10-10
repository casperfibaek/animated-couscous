import connection from './connection';
import defaultDatabase from './defaultDatabase';

export default async function initialize() {
  try {
    await connection.sequelize.authenticate();
    await connection.sequelize.sync({ force: true });

    await Promise.all([
      connection.Users.create(defaultDatabase.defaultUser),
      connection.Sites.create(defaultDatabase.defaultSiteS1),
      connection.Sites.create(defaultDatabase.defaultSiteS2),
    ]);

    return 'completed';
  } catch (err) {
    throw new Error(err);
  }
}
