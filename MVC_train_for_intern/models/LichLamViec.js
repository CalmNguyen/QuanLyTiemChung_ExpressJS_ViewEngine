const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('LichLamViec', {
        MaNV: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'NhanVien',
                key: 'MaNV'
            }
        },
        Ngay: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true
        },
        Ca: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true
        }
    }, {
        sequelize,
        tableName: 'LichLamViec',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaNV" },
                ]
            },
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "Ngay" },
                ]
            },
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "Ca" },
                ]
            },
            {
                name: "fk_LichLamViec_NhanVien",
                using: "BTREE",
                fields: [
                    { name: "MaNV" },
                ]
            },
        ]
    });
};
