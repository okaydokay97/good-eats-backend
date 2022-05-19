const User = require('./User')
const Restaurant = require('./Restaurant')
const Order = require('./Order')
const Sequelize = require('sequelize')
const db = require('../config/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect
})

User.belongsToMany(Restaurant, {through: Order})
Restaurant.belongsToMany(User, {through: Order})


const tables = {}
tables.Sequelize = Sequelize
tables.sequelize = sequelize
tables.User = require('./User')
tables.Restaurant = require('./Restaurant')
tables.Order = require('./Order')

module.exports = tables