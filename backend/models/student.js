var mongoose = require('mongoose');
ObjectId = mongoose.Schema.ObjectId;

var reportSchema = new mongoose.Schema({
  date: { type: String, required: true },
  vitals: { type: String, required: true },
  symptoms: { type: String, required: true },
  call_notes: { type: String, required: true },
  treatment_plan: { type: String, required: true }
});


var schema = new mongoose.Schema({
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


var Student = mongoose.model('Student', schema);
var Report = mongoose.model('Report', reportSchema);
module.exports = Student;
