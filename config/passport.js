// passport-config.js
const passport = require('passport');
const { Op } = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Import mô hình người dùng

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username', // Tên trường dùng để xác định người dùng (email trong trường hợp này)
            passwordField: 'password', // Tên trường dùng để xác thực mật khẩu
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({
                    where: {
                        [Op.or]: [
                            { email: username },
                            { phone: username },
                            { username: username },
                        ],
                    },
                });


                if (!user) {
                    return done(null, false, { message: 'Email không tồn tại' });
                }

                const isPasswordValid = await user.comparePassword(password);

                if (!isPasswordValid) {
                    return done(null, false, { message: 'Mật khẩu không đúng' });
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;
