const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('PhieuDatHang', {
        MaPDH: {
            type: DataTypes.CHAR(10),
            allowNull: true,
            primaryKey: true
        },
        // student_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: true,
        //   references: {
        //     model: 'student',
        //     key: 'student_id'
        //   }
        // },
        NgayLap: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        NgayGui: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        NhaCungCap: {
            type: DataTypes.CHAR(50),
            allowNull: true
        },
        TongSoLuongDatMua: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        TenVaccine: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'PhieuDatHang',
        timestamps: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "MaPDH" },
                ]
            },
        ]
    });
};
