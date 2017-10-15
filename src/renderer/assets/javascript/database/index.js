import setup from './setup';
import defaultDatabase from './defaultDatabase';

export default {
  async initialize() {
    try {
      await setup.sequelize.authenticate();
      await setup.sequelize.sync({ force: false });
      await setup.Users.create(defaultDatabase.defaultUser);

      return 'completed';
    } catch (err) {
      throw new Error(err);
    }
  },
  base: setup.sequelize,
  Users: setup.Users,
  Sites: setup.Sites,
  Images: setup.Images,
};
