require('dotenv').config({silent: true});

var mongoose = require('mongoose');
mongoose.connect(process.env.HEALTH_DB);

var Student = require('./models/student');

var studentData = [
  { name: 'Andrew Chan',
    image: 'http://all-things-sloth.com/wp-content/uploads/2014/10/A-three-toed-tree-sloth-h-008.jpg',
    medicalHistory: 'This boy gets sick',
    allergies: 'This boy has no allergies',
    medications: 'This is the best man on the planet and he takes no medications',
    immunizations: 'He is immune to all diseases'
 },
];

// this is mongoose related
Student.create(studentData, function(err, students) {
  if (err) {
    console.log('Database Error: ', err);
  }
  console.log('Student inserted: ', students);
  // we are able to do this below because we are not using express in this model
  process.exit();
})
