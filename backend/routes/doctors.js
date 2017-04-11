
var express = require('express');
var router = express.Router();

var Doctor = require('../models/doctor');

router.get('/', function(req, res, next) {
  Doctor.find({}, function(err, doctor) {
    if (err) {
      console.log(err);
    }
    res.json(doctor);
    doctor: doctor
  })
});

// save and create a new doctor
router.post('/', function(req, res, next) {
  var newDoctor = new Doctor({
    name: req.body.name
  });

  newDoctor.save(function(err, doctor) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
      console.log('Error: ', err);
    } else {
      res.status(200).json({
        status: 'OK',
        doctor: doctor
      })
    }
  });
});

// delete doctor
router.delete('/', function(req, res, next) {
  Doctor.findByIdAndRemove(req.body.id, function(err, doctor) {
    if (err) console.log(err);
    res.json({
      status: 'deleted that doc!',
      doctor: doctor
    });
  })
});

module.exports = router;
