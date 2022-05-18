const express = require('express')
const cors = require('cors')
const app = express()
const tables = require('./models')

let corsOptions = {
  origin:'http://localhost:8081'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
async function createTables(){
  await tables.User.sync({force: true})
  await tables.Restaurant.sync({force: true})
  await tables.Order.sync({force: true})
}
app.get('/', (req, res) => {
  res.json({'message': 'Welcome to Good eats'})
})

const PORT = process.env.PORT || 4000
createTables()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

