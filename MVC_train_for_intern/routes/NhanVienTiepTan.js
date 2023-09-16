const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const NhanVienTiepTan = require('../controllers/NhanVienTiepTan');
/* GET home page. */
router.get('/', auth.isLoggedIn, NhanVienTiepTan.index);

module.exports = router;
