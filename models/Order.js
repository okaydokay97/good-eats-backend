const { Sequelize, DataTypes, Model } = require("sequelize")
const db = require('../config/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect
})

class Order extends Model{}



Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
},{
  sequelize,
  modelName: 'Order' 
})

module.exports = Order
