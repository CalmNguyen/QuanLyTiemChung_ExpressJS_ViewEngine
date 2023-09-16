var DataTypes = require("sequelize").DataTypes;
var _DanhSachCacGoiTiem = require("./DanhSachCacGoiTiem");
var _PhieuDatHang = require("./PhieuDatHang");
var _DanhSachDatMuaVaccine = require("./DanhSachDatMuaVaccine");
var _HoaDonThanhToan = require("./HoaDonThanhToan");
var _KhachHang = require("./KhachHang");
var _LichLamViec = require("./LichLamViec");
var _LichRanh = require("./LichRanh");
var _NhanVien = require("./NhanVien");
var _PhieuDangKy = require("./PhieuDangKy");
var _TreEm = require("./TreEm");
var _XacNhanThanhToan = require("./XacNhanThanhToan");

function initModels(sequelize) {
    var DanhSachCacGoiTiem = _DanhSachCacGoiTiem(sequelize, DataTypes);
    var DanhSachDatMuaVaccine = _DanhSachDatMuaVaccine(sequelize, DataTypes);
    var HoaDonThanhToan = _HoaDonThanhToan(sequelize, DataTypes);
    var KhachHang = _KhachHang(sequelize, DataTypes);
    var LichLamViec = _LichLamViec(sequelize, DataTypes);
    var LichRanh = _LichRanh(sequelize, DataTypes);
    var NhanVien = _NhanVien(sequelize, DataTypes);
    var PhieuDangKy = _PhieuDangKy(sequelize, DataTypes);
    var PhieuDatHang = _PhieuDatHang(sequelize, DataTypes);
    var TreEm = _TreEm(sequelize, DataTypes);
    var XacNhanThanhToan = _XacNhanThanhToan(sequelize, DataTypes);



    // admin.belongsTo(account, { as: "admin_account", foreignKey: "admin_id" });
    // account.hasOne(admin, { as: "admin_account", foreignKey: "admin_id" });
    // student.belongsTo(account, { as: "student_account", foreignKey: "student_id" });
    // account.hasOne(student, { as: "student_account", foreignKey: "student_id" });
    // tutor.belongsTo(account, { as: "tutor_account", foreignKey: "tutor_id" });
    // account.hasOne(tutor, { as: "tutor_account", foreignKey: "tutor_id" });
    // tutorrequest.belongsTo(post, { as: "post", foreignKey: "post_id" });
    // post.hasMany(tutorrequest, { as: "tutorrequests", foreignKey: "post_id" });
    // studentrequest.belongsTo(student, { as: "student", foreignKey: "student_id" });
    // student.hasMany(studentrequest, { as: "studentrequests", foreignKey: "student_id" });
    // post.belongsTo(studentrequest, { as: "student_request", foreignKey: "student_request_id" });
    // studentrequest.hasMany(post, { as: "posts", foreignKey: "student_request_id" });
    // tutorrequest.belongsTo(tutor, { as: "tutor", foreignKey: "tutor_id" });
    // tutor.hasMany(tutorrequest, { as: "tutorrequests", foreignKey: "tutor_id" });

    return {
        DanhSachCacGoiTiem,
        DanhSachDatMuaVaccine,
        HoaDonThanhToan,
        KhachHang,
        LichLamViec,
        LichRanh,
        NhanVien,
        PhieuDangKy,
        PhieuDatHang,
        TreEm,
        XacNhanThanhToan,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
