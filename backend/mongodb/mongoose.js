const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true })

const db = mongoose.connection
const URL = require('../schema/URL')

db.on('error', error => {
  console.log(error)
})

module.exports = URL
