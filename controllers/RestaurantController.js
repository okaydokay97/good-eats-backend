const db = require('../models')
const Restaurant = db.Restaurant
const Op = Restaurant.sequelize.Op

exports.create = (req,res) => {

}

exports.findAll = (req, res) => {
  Restaurant.findAll()
  .then(data => {
    res.send(data)
  })
}

exports.findOne = (req, res) => {

}