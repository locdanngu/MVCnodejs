const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
    iduser: {
        type: DataTypes.BIGINT, // Thay đổi INTEGER thành BIGINT
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING, // Thay đổi TEXT thành VARCHAR
    email: DataTypes.STRING,    // Thay đổi TEXT thành VARCHAR
    phone: DataTypes.STRING,    // Thay đổi TEXT thành VARCHAR
    password: DataTypes.STRING  // Thay đổi TEXT thành VARCHAR
}, {
    tableName: 'user'
});

User.prototype.comparePassword = async function(candidatePassword) {
    // So sánh mật khẩu nhập vào (candidatePassword) với mật khẩu đã lưu trữ (this.password)
    return await bcrypt.compare(candidatePassword, this.password);
  };

module.exports = User;