const { models } = require('../models');
exports.listPosts = async () => {
    return await models.LichRanh.findAll({
        raw: true,
    });
};
exports.delete_LichRanh = async (manv, ngay, ca) => {
    return await models.LichRanh.destroy({
        where: {
            // criteria
            MaNV: manv,
            Ngay: ngay,
            Ca: ca
        }
    })
}