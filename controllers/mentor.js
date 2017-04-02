`use strict`

const mongoose = require('mongoose')
const MentorModel = require('../models/mentor')
const Mentor = mongoose.model('Mentor')

function get_mentors (req, res) {
  Mentor.find({}, function (err, mentors) {
    if (err) res.status(500).send({ message: `Error at request, ${err}` })
    if (!mentors) res.status(404).send({ message: `Mentors not found, ${err}` })

    res.status(200).json(mentors)
  })
}

function get_mentor_by_id (req, res) {
  let mentorId = req.params.mentorId
  Mentor.findById(mentorId, function (err, mentor) {
    if (err) res.status(500).send({ message: `Error at request, ${err}` })
    if (!mentor) res.status(404).send({ message: `Mentor not found, ${err}` })

    res.status(200).json(mentor)
  })
}

function add_mentor (req, res) {
  let newMentor = new Mentor(req.body)
  newMentor.save(function (err, mentor) {
    if (err) res.status(500).send({ message: `Error at request, ${err}` })

    res.status(200).json(mentor)
  })
}

function update_mentor (req, res) {
  let mentorId = req.params.mentorId
  let mentorBody = req.body
  Mentor.findByIdAndUpdate(mentorId, mentorBody, function (err, mentor) {
    if (err) res.status(500).send({ message: `Error at request, ${err}` })
    if (!mentor) res.status(404).send({ message: `Mentor not found, ${err}` })

    res.status(200).json({ mentor, message: `Update success` })
  })
}

function delete_mentor (req, res) {
  let mentorId = req.params.mentorId
  Mentor.findByIdAndRemove(mentorId, function (err, mentor) {
    if (err) res.status(500).send({ message: `Error at request, ${err}` })
    if (!mentor) res.status(404).send({ message: `Mentor not found, ${err}` })

    console.log(mentorId)
    res.status(200).json({ mentor, message: `Deleted successfully` })
  })
}

module.exports = {
  get_mentors,
  add_mentor,
  get_mentor_by_id,
  update_mentor,
  delete_mentor
}
