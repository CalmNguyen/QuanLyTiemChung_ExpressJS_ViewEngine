const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('KhachHang', {
        MaKH: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TreEm',
                key: 'MaKH'
            }
        },
        HoTenKH: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        NgaySinh: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        GioiTinh: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            defaultValue: 0
        },
        DiaChi: {
            type: DataTypes.CHAR(50),
            allowNull: false,
            defaultValue: 0
        },
        SDT: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'KhachHang',
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
                name: "fk_KhachHang_TreEm",
                using: "BTREE",
                fields: [
                    { name: "MaKH" },
                ]
            },
        ]
    });
};
