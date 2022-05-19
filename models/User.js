const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../config/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect
})

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
},{
  sequelize,
  modelName: 'User'
})

module.exports = User