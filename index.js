`use strict`

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const api = require('./routes')

mongoose.connect('mongodb://localhost:27017/hackporunacausa', (err) => {
  if (err) console.log(`Connection to database failed, ${err}`)

  console.log(`Database connection established`)
})

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', api)

app.listen(3000, () => 'App listening on port: 3000')
