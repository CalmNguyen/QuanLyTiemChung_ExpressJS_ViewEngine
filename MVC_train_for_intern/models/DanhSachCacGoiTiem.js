const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('DanhSachCacGoiTiem', {
        MaGoiVaccine: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        TenVaccine: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        GhiChu: {
            type: DataTypes.CHAR(50),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'DanhSachCacGoiTiem',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaGoiVaccine" },
                ]
            },
        ]
    });
};
