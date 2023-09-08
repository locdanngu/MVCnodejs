const City = require('../models/User');
const { Op } = require('sequelize');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
require('../config/passport-config'); // Import cấu hình Passport.js

exports.login = (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/', // Điều hướng nếu đăng nhập thất bại
        failureFlash: true, // Cho phép thông báo lỗi
    })(req, res, () => {
        // Đăng nhập thành công, bạn có thể truy cập thông tin người dùng từ req.user
        const user = req.user;
        // Truyền thông tin người dùng vào session (nếu bạn sử dụng session)
        req.session.user = user;
        const backpage = req.body.backpage || '/';
        res.redirect(backpage);
    });
};

exports.signup = (req, res) => {
    passport.authenticate('register', {
        failureRedirect: '/', // Điều hướng nếu đăng ký thất bại
        failureFlash: true, // Cho phép thông báo lỗi
    })(req, res, () => {
        // Đăng ký thành công, bạn có thể truy cập thông tin người dùng từ req.user
        const user = req.user;
        // Truyền thông tin người dùng vào session (nếu bạn sử dụng session)
        req.session.user = user;
        const backpage = req.body.backpage || '/';
        res.redirect(backpage);
    });
};

exports.logout = (req, res) => {
    // Xóa thông tin người dùng khỏi session (nếu bạn sử dụng session)
    req.session.destroy((err) => {
        if (err) {
            console.error('Lỗi khi đăng xuất:', err);
        }
        // Sau khi đăng xuất, bạn có thể chuyển hướng người dùng đến trang chủ hoặc bất kỳ trang nào khác
        res.redirect('/');
    });
};


module.exports = {
    login: exports.login,
    signup: exports.signup,
    logout: exports.logout,
};
