'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('123456', 10); // Thay 'your_password_here' bằng mật khẩu bạn muốn sử dụng

    await queryInterface.bulkInsert('user', [
      {
        username: 'locdanngu',
        email: 'tranvanloc96lhp@gmail.com',
        phone: '0977481545',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        phone: '9876543210',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các bản ghi người dùng khác ở đây nếu cần
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
