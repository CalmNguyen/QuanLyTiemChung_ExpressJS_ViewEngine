const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('DanhSachDatMuaVaccine', {
        MaKH: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true
        },
        MaPDH: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            references: {
                model: 'PhieuDatHang',
                key: 'MaPDH'
            }
        },
        SoLuong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DuocDuyet: {
            type: DataTypes.CHAR(50),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'DanhSachDatMuaVaccine',
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
                name: "FK_DanhSachDatMuaVaccine_Student",
                using: "BTREE",
                fields: [
                    { name: "MaPDK" },
                ]
            },
        ]
    });
};
