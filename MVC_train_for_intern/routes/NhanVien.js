const express = require('express');
const router = express.Router();
const passport = require('../middlewares/passport');
const auth = require('../middlewares/auth');
const NhanVienCon = require('../controllers/NhanVien');
/* GET home page. */
router.get('/hello', NhanVienCon.hello);
router.get('/login', NhanVienCon.login);
//router.post('/login', NhanVienCon.CheckAccount);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/nhanvien',
    failureRedirect: '/',
    failureFlash: true,
}));
router.get('/nhanvien', NhanVienCon.CheckAccount);
router.get('/logout', NhanVienCon.logout);
module.exports = router;
