//import express from 'express';
//import { engine } from 'express-handlebars';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
var engine_ = require('express-handlebars')
const app = express();
const mysql = require('mysql');
require('dotenv').config();
app.use(express.urlencoded());
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM nhanvien", function (err, result, fields) {
//         if (err) throw err;
//         console.log("Connect success");
//     });
// });
app.engine('hbs', engine_.engine());
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

const passport = require('./middlewares/passport');
const indexRouter = require('./routes/indexRoute');
const NhanVienRouter = require('./routes/NhanVien');
const NhanVienTiepTanRouter = require('./routes/NhanVienTiepTan');
const NhanVienYBacSiRouter = require('./routes/NhanVienYBacSi');
const QuanLyRouter = require('./routes/QuanLy');
const NhanVienKeToanRouter = require('./routes/NhanVienKeToan.js');
const NhanVienDieuHanhRouter = require('./routes/NhanVienDieuHanh.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use('/', indexRouter);
app.use('/', NhanVienRouter);
app.use('/NhanVienTiepTan', NhanVienTiepTanRouter);
app.use('/NhanVienYBacSi', NhanVienYBacSiRouter);
app.use('/QuanLy', QuanLyRouter);
app.use('/NhanVienKeToan', NhanVienKeToanRouter);
app.use('/NhanVienDieuHanh', NhanVienDieuHanhRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

const Sequelize = require('sequelize');

//const InitModels = require('./initModels');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// module.exports = {
//     sequelize: sequelize,
//     models: InitModels(sequelize),
// }
app.listen(3000);
module.exports = app;