import connection from './connection';
import defaultDatabase from './defaultDatabase';

export default async function initialize() {
  try {
    await connection.sequelize.authenticate();
    await connection.sequelize.sync({ force: false });
    await connection.Users.create(defaultDatabase.defaultUser);

    return 'completed';
  } catch (err) {
    throw new Error(err);
  }
}
