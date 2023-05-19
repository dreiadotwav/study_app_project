const {DataTypes} = require('sequelize');
const {sequelize} = require("../connection");

//uwu owo

const ThemeModel = sequelize.define('themes', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    create_date: {
        type: DataTypes.DATE,
        allowNull: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    keywords: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    owner_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    tablename: 'themes',
    timestamps: false
});

module.exports={
    ThemeModel
};