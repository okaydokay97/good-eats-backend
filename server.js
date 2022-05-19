const express = require('express')
const cors = require('cors')
const app = express()
const tables = require('./models')
const { User, sequelize, Restaurant } = require('./models')

let corsOptions = {
  origin:'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

async function createTables(){
  await tables.User.sync({force: true})
  await tables.Restaurant.sync({force: true})
  await tables.Order.sync({force: true})
}

createTables()

// require('./routes/userRoutes').run()
const userCont = require('./controllers/UserController')
const router = require('express').Router()
router.get('/users', userCont.findAll)
router.post('/users', userCont.create)
router.post('/user', userCont.findOne)

app.use(router)

const PORT = 4000



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

