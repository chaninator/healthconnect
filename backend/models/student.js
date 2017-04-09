var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true},
  image: String,
  history: { type: String, required: true},
  allergies: { type: String, required: true},
  medications: { type: String, required: true},
  immunizations: { type: String, required: true},
});

var Student = mongoose.model('Student', schema);

module.exports = Student;
