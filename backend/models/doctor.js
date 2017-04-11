var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true }
});

var Doctor = mongoose.model('Doctor', schema);

module.exports = Doctor;
