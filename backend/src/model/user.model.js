const {DataTypes} = require('sequelize');
const {sequelize} = require("../connection");

const UserModel = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: true
    },

    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
    
}, {
    tablename: 'users',
    timestamps: false
});

module.exports={
    UserModel
};