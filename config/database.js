const Sequelize = require('sequelize');

// Tạo một đối tượng Sequelize và cấu hình kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('testnodejs', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

