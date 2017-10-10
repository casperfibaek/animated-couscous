/* eslint-disable no-console, consistent-return */
import connection from './connection';
import initialize from './initialize';

export default {
  initialize,
  base: connection.sequelize,
  Users: connection.Users,
  Sites: connection.Sites,
  Images: connection.Images,
};

// initialize,
// getUser,
// getUserSites,
// getLatestUser,
// updateUser,
// updateLastCheck,
// insertInto,
// createImageSiteAndInsert,
