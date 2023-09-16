const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('TreEm', {
        MaKH: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TreEm',
                key: 'MaKH'
            }
        },
        HoTenNguoiGiamHo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        QuanHe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        SDTNguoiGiamHo: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'TreEm',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaKH" },
                ]
            },
            {
                name: "fk_TreEm_KhachHang",
                using: "BTREE",
                fields: [
                    { name: "MaKH" },
                ]
            },
        ]
    });
};
