const lichRanh_SV = require('../services/LichRanh');
exports.index = (req, res) => {
    res.render('NhanVien/NhanVienDieuHanh/index');
}
exports.SapXepLich = async (req, res, next) => {
    const postList = await lichRanh_SV.listPosts();
    console.log(postList);
    res.render('NhanVien/NhanVienDieuHanh/SapXepLichLamViec', { postList });
};
exports.accept = async (req, res, next) => {
    try {
        const delete_LR = lichRanh_SV.delete_LichRanh(req.params.MaNV, req.params.Ngay, req.params.Ca);
        if (delete_LR) {
            console.log("success");
        }
        else {
            console.log("fail");
        }
        res.redirect('/NhanVienDieuHanh/SapXepLich');
    }
    catch (err) {
        next(err);
    };
};