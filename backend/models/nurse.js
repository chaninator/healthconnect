var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = require('./student')

var nurseSchema = new Schema({
  name:  { type: String, required: true },
  // code: { type: String, required: true },
  students: [{ type: Schema.ObjectId, ref: 'Student' }]
});

var Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
