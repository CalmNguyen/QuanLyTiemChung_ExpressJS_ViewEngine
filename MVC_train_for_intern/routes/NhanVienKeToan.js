const express = require('express');
const router = express.Router();

const NhanVienKeToan = require('../controllers/NhanVienKeToan');
const auth = require('../middlewares/auth')
/* GET home page. */
router.get('/', auth.isLoggedIn, NhanVienKeToan.index);

module.exports = router;
