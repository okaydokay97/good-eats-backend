const db = require('../models')
const User = db.User


exports.create = (req, res) => {
  if (!req.body.email){
    res.status(400).send({
      message: 'Content cannot be empty!'
    })
    return
  }
  const user = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    admin: req.body.admin
  }
  User.create(user)
  .then(data => {
    res.send(data)
  })
}

exports.findAll = (req, res) => {
  User.findAll()
  .then(data => {
    res.send(data)
  })
}


exports.findOne = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(foundUser => {
    if( !foundUser ) {
      res.send({message: 'The email or password you entered is incorrect.'})
    } else {
      res.send(foundUser)
    }
  })
}