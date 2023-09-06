const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const City = sequelize.define('city', {
    idcity: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namecity: DataTypes.TEXT,
    idcountry: DataTypes.INTEGER,
    imagecity: DataTypes.TEXT
}
    , {
        tableName: 'city' // Đặt tên bảng cụ thể là 'city'
    });


module.exports = City;