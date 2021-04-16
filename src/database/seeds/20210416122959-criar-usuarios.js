const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Alex',
          email: 'alex@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Alex 2',
          email: 'alex2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Alex 3',
          email: 'alex3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
