const User = require('./User')
const Restaurant = require('./Restaurant')
const Order = require('./Order')




User.belongsToMany(Restaurant, {through: Order})
Restaurant.belongsToMany(User, {through: Order})
