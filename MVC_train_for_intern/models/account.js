const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('account', {
        account_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.CHAR(60),
            allowNull: false
        },
        is_locked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'account',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "account_id" },
                ]
            },
        ]
    });
};
