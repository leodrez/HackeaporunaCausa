`use strict`

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Get all users

app.get('/users', function get_users (req, res) {

})

// Get user by id

app.get('/users/:userId', function get_user_by_id (req, res) {

})

// Add user

app.post('/users', function add_user (req, res) {

})

// Update user

app.put('/users:userId', function update_user (req, res) {

})

// Delete user

app.delete('/users/:userId', function delete_user (req, res) {

})

//

// Get all mentors

app.get('/mentors', function get_mentors (req, res) {

})

// Get mentor by id

app.get('/mentors/:mentorId', function get_mentor_by_id (req, res) {

})

// Add mentor

app.post('/mentors', function add_mentor (req, res) {

})

// Update mentor

app.put('/mentors/:mentorId')

// Delete mentor

app.listen(3000, () => 'App listening on port: 3000')
