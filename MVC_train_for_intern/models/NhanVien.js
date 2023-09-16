const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('NhanVien', {
        MaNV: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            primaryKey: true,
        },
        Password: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        NgaySinh: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ViTri: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        BangCap: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        DiaChi: {
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        BangCap: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        Phone: {
            type: DataTypes.CHAR(10),
            allowNull: false
        },
        Email: {
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        Luong: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        TrungTam: {
            type: DataTypes.CHAR(50),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'NhanVien',
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

        ]
    });
};
