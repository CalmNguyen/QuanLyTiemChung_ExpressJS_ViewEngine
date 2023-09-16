const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const NhanVienYBacSi = require('../controllers/NhanVienYBacSi');
/* GET home page. */
router.get('/', auth.isLoggedIn, NhanVienYBacSi.index);

module.exports = router;
