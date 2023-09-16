const express = require('express');
const router = express.Router();

const NhanVienDieuHanh = require('../controllers/NhanVienDieuHanh');
/* GET home page. */
const auth = require('../middlewares/auth')
router.get('/', auth.isLoggedIn, NhanVienDieuHanh.index);
router.get('/SapXepLich', auth.isLoggedIn, NhanVienDieuHanh.SapXepLich);
router.post('/SapXepLich/accept/:MaNV/:Ngay/:Ca', auth.isLoggedIn, NhanVienDieuHanh.accept);


module.exports = router;
