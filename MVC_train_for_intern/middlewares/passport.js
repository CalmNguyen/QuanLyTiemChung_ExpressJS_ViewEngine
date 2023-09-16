const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const accountService = require('../services/NhanVien');

passport.use(new LocalStrategy({
    usernameField: 'manv',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, manv, password, done) => {
    try {
        const user = await accountService.getAccountByMaNV(manv);
        console.log(user);
        if (!user) {
            return done(null, false, req.flash('error', 'MaNV không tồn tại'));
        }
        if (user.Password != password) {
            return done(null, false, req.flash('error', 'Mật khẩu không đúng'));
        }

        return done(null, user);
    }
    catch (err) {
        console.log(err);
    }
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    return done(null, user);
});

module.exports = passport;
