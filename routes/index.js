const express = require('express');
const api = express.Router();

const MentorCtrl = require('../controllers/mentor');

// Mentor routes
api.get('/mentors', MentorCtrl.get_mentors);
api.post('/mentors', MentorCtrl.add_mentor);
api.get('/mentors/:mentorId', MentorCtrl.get_mentor_by_id);
api.put('/mentors/:mentorId', MentorCtrl.update_mentor);
api.delete('/mentors/:mentorId', MentorCtrl.delete_mentor);

module.exports = api;
