const { models } = require('../models');
exports.getAccountByMaNV = async (manv) => {
    const nhanVien = await models.NhanVien.findOne({
        where: {
            MaNV: manv
        },
        raw: true
    });
    return nhanVien;
}