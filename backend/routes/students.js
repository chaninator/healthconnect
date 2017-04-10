
var express = require('express');
var router = express.Router();

var Student = require('../models/student');

router.get('/', function(req, res, next) {
  Student.find({}, function(err, student) {
    if (err) {
      console.log(err);
    }
    res.json(student);
    student: student
  })
});

router.post('/', function(req, res, next) {

  var newStudent = new Student({
    name: req.body.name,
    image: req.body.image,
    dob: req.body.dob,
    history: req.body.history,
    allergies: req.body.allergies,
    medications: req.body.medications,
    immunizations: req.body.immunizations,
    guardian_name: req.body.guardian_name,
    guardian_number: req.body.guardian_number,
    guardian_email: req.body.guardian_email,
    reports: req.body.reports
    // report: req.body.reportId
  });

  // var Student = mongoose.model('Student', schema);
  // var Student = new Student({ reports: [] })
  // student.report[0].date = '';
  // student.report[0].vitals = '';
  // student.report[0].symptoms = '';
  // student.report[0].call_notes = '';
  // student.report[0].treatment_plans = '';
  // student.report[0].date = '';
  // student.save(callback);


  newStudent.save(function(err, student) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
      console.log('Error: ', err);
    } else {
      res.status(200).json({
        status: 'OK',
        student: student
      })
    }
  });
});

// update a student records
router.patch('/', function(req, res, next) {
  Student.findById({_id: req.body.id}, function(err, student) {
    if (err) console.log(err);

    student.name = req.body.name || student.name;
    student.image = req.body.image || student.image;
    student.history = req.body.history || student.history;
    student.allergies = req.body.allergies || student.allergies;
    student.medications = req.body.medications || student.medications;
    student.immunizations = req.body.immunizations || student.immunizations;

    student.save(function(err, student) {
      if (err) console.log(err);

      res.json({
        status: 'updated!',
        updated_student: student
      });
    });

  });
});

// delete studemt
router.delete('/', function(req, res, next) {
  Student.findByIdAndRemove(req.body.id, function(err, student) {
    if (err) console.log(err);
    res.json({
      status: 'deleted!',
      student: student
    });
  })
});

module.exports = router;
//---------------------------------------------------------------------
