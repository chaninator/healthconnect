var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = require('./student');

var guardianSchema = new Schema({
  name:  { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  student: [{ type: Schema.ObjectId, ref: 'Student' }]
});

var Guardian = mongoose.model('Guardian', guardianSchema);

module.exports = Guardian;
