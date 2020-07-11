const mongoose = require('mongoose')

const BookSchema =mongoose.Schema({
  title: String
})

module.exports = mongoose.model('books', BookSchema)