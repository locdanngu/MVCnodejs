const City = require('../models/User');
const { Op } = require('sequelize');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
require('../config/passport-config'); // Import cấu hình Passport.js

exports.login = (req, res, next) => {
    passport.authenticate('local', {
        // successRedirect: '/', // Điều hướng sau khi đăng nhập thành công
        // failureRedirect: '/homestay', // Điều hướng nếu đăng nhập thất bại
        failureFlash: true, // Cho phép thông báo lỗi
    })(req, res, () => {
        // Đăng nhập thành công, bạn có thể truy cập thông tin người dùng từ req.user
        const user = req.user;

        // Truyền thông tin người dùng vào session (nếu bạn sử dụng session)
        req.session.user = user;

        // Hoặc truyền thông tin người dùng qua query string
        // res.redirect(`/?username=${user.username}&email=${user.email}`);

        // Sau khi truyền thông tin người dùng, thực hiện chuyển hướng về /
        res.redirect('/');
    });
};

module.exports = {
    login: exports.login,
};
