var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var moment = require('moment');


var reportSchema = new mongoose.Schema({
  date: { type: String, default: moment(new Date()).format('MMM Do YYYY, h:mm a') },
  vitals: { type: String, required: true },
  symptoms: { type: String, required: true },
  notes: { type: String, required: true }
});


var studentSchema = new mongoose.Schema({
  image: String,
  name: { type: String, required: true},
  dob: { type: String, required: true},
  history: { type: String, required: true},
  allergies: { type: String, required: true},
  medications: { type: String, required: true},
  immunizations: { type: String, required: true},
  guardian_name: { type: String, required: true},
  guardian_number: { type: String, required: true},
  guardian_email: { type: String, required: true},
  report: [reportSchema]
});


var Student = mongoose.model('Student', studentSchema);
var Report = mongoose.model('Report', reportSchema);
module.exports = Student;
