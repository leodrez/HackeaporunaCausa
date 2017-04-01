const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mentor = new Schema( {
  mentor_name: {
    type: String,
    require: true
  },
  mentor_lastname: {
    type: String,
    require: true
  },
  birth_date: {
    type: Number,
    require: true
  },
  gender: {
    type: String,
    require: true
  }
  address: {
    type: String,
    require: true
  },
  mobile_number: {
    type: Number,
    require: true
  },
  work_number: {
    type: Number,
    require: true
  },
  license_num: {
    type: Number,
    require: true
  },
  locations: {
    type: [Object],
    require: true
  },
  type_mentoring: {
    type: String,
    require: true
  },
  interest: {
    type: [Object],
    require: true,
  }
})
module.exports = mongoose.model(‘Mentors’, mentor)
