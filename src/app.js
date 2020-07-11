const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

mongoose.connect('mongodb+srv://mongo:lalala@cluster0-hoi2v.gcp.mongodb.net/tasks-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res => console.log('db connected'))
  .catch(e => console.error(e))

const bookRoutes = require('./routes/books')

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/', bookRoutes)


app.listen(app.get('port'), () => {
  console.log(`server running on port ${app.get('port')}`)
})