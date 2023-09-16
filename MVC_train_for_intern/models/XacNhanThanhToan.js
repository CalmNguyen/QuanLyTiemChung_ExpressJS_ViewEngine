const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('XacNhanThanhToan', {
        MaXNTT: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true
        },
        MaHDTT: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            references: {
                model: 'HoaDonThanhToan',
                key: 'MaHDTT'
            }
        },
        DotThanhToan: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ThanhTien: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        NgayThanhToan: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        NgayThanhToanTiepTheo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        TongTienChuaTT: {
            type: DataTypes.FLOAT,
            allowNull: false
        }

    }, {
        sequelize,
        tableName: 'XacNhanThanhToan',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaXNTT" },
                ]
            },
            {
                name: "fk_XacNhanThanhToan_HoaDonThanhToan",
                using: "BTREE",
                fields: [
                    { name: "MaHDTT" },
                ]
            },

        ]
    });
};
