// passport-config.js
const passport = require('passport');
const { Op } = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Import mô hình người dùng
const bcrypt = require('bcrypt');

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
    done(null, user.iduser);
});

passport.deserializeUser(async (iduser, done) => {
    try {
        const user = await User.findByPk(iduser);
        done(null, user);
    } catch (error) {
        done(error);
    }
});


passport.use(
    'register',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, username, password, done) => {
            const { email, phone } = req.body;

            try {
                const user = await User.findOne({
                    where: {
                        [Op.or]: [
                            { email },
                            { username },
                            { phone },
                        ],
                    },
                });

                if (user) {
                    return done(null, false, { message: 'Thông tin tài khoản đã tồn tại' });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = await User.create({
                    username,
                    phone,
                    email,
                    password: hashedPassword,
                });

                return done(null, newUser);
            } catch (error) {
                return done(error);
            }
        }
    )
);


module.exports = passport;
