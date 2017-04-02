const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MentorSchema = new Schema({
  mentor_name: {
    type: String,
    required: true
  },
  mentor_last_name: {
    type: String,
    required: true
  },
  birth_date: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['m', 'f']
  },
  address: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: true
  },
  license_num: {
    type: Number,
    required: true
  },
  location: {
    type: Array,
    required: true
  },
  mentoring_type: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Mentor', MentorSchema)
