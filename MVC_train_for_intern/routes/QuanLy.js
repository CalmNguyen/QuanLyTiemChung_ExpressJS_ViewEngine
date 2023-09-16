const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const QuanLy = require('../controllers/QuanLy');
/* GET home page. */
router.get('/', auth.isLoggedIn, QuanLy.index);

module.exports = router;