const bcrypt = require('bcrypt');
const auth = require('../middlewares/auth')
const NhanVien_SV = require('../services/NhanVien');
exports.hello = (req, res) => {
    // res.render('index');
    try {
        res.status(200).json({ message: 'Success', data: {} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.login = (req, res) => {
    console.log("login");
    res.render('test');
}
exports.CheckAccount = async (req, res, next) => {
    // const manv = req.body.manv;
    // const pw = req.body.password;
    // const NhanVien_Acc = await NhanVien_SV.getAccountByMaNV(manv);
    // if (!NhanVien_Acc) {
    //     console.log("không tồn tại mã nv");
    //     res.redirect('/');
    // }
    // else {
    // if (Password == pw) {
    console.log(req.user.ViTri, 'in vị trí')
    const ViTri = req.user.ViTri
    if (ViTri == "Tiep tan")
        res.redirect("/nhanvientieptan");
    else if (ViTri == "Y/ Bac si")
        res.redirect("/nhanvienybacsi");
    else if (ViTri == "Ke toan")
        res.redirect("/nhanvienketoan");
    else if (ViTri == "Dieu hanh")
        res.redirect("/nhanviendieuhanh");
    else if (ViTri == "Quan ly")
        res.redirect("/quanly");
    else res.redirect('/');
    // }
    // else res.redirect('/');
}
exports.logout = async (req, res, next) => {
    //req.logout();
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
    res.redirect('/');
}