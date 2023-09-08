const City = require('../models/User');
const { Op } = require('sequelize');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
require('../config/passport-config'); // Import cấu hình Passport.js

exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/homestay', // Điều hướng sau khi đăng nhập thành công
        failureRedirect: '/', // Điều hướng nếu đăng nhập thất bại
        failureFlash: true, // Cho phép thông báo lỗi
    })(req, res, next);
};

module.exports = {
    login: exports.login,
};
