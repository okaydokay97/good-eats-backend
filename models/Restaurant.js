const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../config/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect
})

class Restaurant extends Model{}

Restaurant.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cuisine: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  menu: {
    type: DataTypes.JSON,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pictures: {
    type: DataTypes.STRING,
  },
  deliver: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  adminUserId: {
    type: DataTypes.INTEGER,
    allowNull:false
  }
},{
  sequelize,
  modelName: 'Restaurant'
})



module.exports = Restaurant