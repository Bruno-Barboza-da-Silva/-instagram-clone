const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            field: "created_at"
        },
        updatedAt:{
            type: DataTypes.DATE,
            field: "updated_at"
        }
    }, 
    {
        tableName: "users",
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
    );

module.exports = users;

