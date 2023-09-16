const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('HoaDonThanhToan', {
        MaHDTT: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true
        },
        MaPDK: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            references: {
                model: 'PhieuDangKy',
                key: 'MaPDK'
            }
        },
        KhachHang: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            references: {
                model: 'KhachHang',
                key: 'MaKH'
            }
        },
        NgayLap: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        LoaiThanhToan: {
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        SoDotThanhToan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        NgayThanhToanTiepTheo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ThanhTienMoiDot: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        PhuongThucGuiTien: {
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        TongTien: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        TongTienDaThanhToan: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'HoaDonThanhToan',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaHDTT" },
                ]
            },
            {
                name: "fk_HoaDonThanhToan_PhieuDangKy",
                using: "BTREE",
                fields: [
                    { name: "MaPDK" },
                ]
            },
            {
                name: "fk_HoaDonThanhToan_KhachHang",
                using: "BTREE",
                fields: [
                    { name: "KhachHang" },
                ]
            },
        ]
    });
};
