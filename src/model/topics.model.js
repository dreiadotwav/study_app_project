const {DataTypes} = require('sequelize');
const {sequelize} = require("../connection");

const TopicModel = sequelize.define('topic', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    create_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    order: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    priority: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    color: {
        type: DataTypes.STRING,
        allowNull: true
    },

    owner_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    tablename: 'topics',
    timestamps: false
});

module.exports={
    TopicModel
};