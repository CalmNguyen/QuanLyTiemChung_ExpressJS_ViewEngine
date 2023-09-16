const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('PhieuDangKy', {
        MaPDK: {
            autoIncrement: true,
            type: DataTypes.CHAR(10),
            allowNull: true,
            primaryKey: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'student',
                key: 'student_id'
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        phone: {
            type: DataTypes.CHAR(10),
            allowNull: true
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        grade: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        subject: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        time: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        other_request: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: "Chưa duyệt"
        }
    }, {
        sequelize,
        tableName: 'PhieuDangKy',
        timestamps: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "student_request_id" },
                ]
            },
            {
                name: "FK_PhieuDangKy_Student",
                using: "BTREE",
                fields: [
                    { name: "student_id" },
                ]
            },
        ]
    });
};
