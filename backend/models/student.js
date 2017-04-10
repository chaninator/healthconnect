var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Guardian = require('./guardian'); 

var studentSchema = new Schema({
  name:  { type: String, required: true },
  guardian: [{ type: Schema.ObjedId, ref: 'Guardian'}],
  report: [ reportSchema ]
});

var reportSchema = new Schema({
  vitals: { type: String, required: true },
  symptoms: { type: String, required: true },
  date: Date,
  call_notes: type: String,
  treatment_plan: { type: String, required: true },
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;
