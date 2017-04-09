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
    history: req.body.history,
    allergies: req.body.allergies,
    medications: req.body.medications,
    immunizations: req.body.immunizations
  });

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

// update a student
router.patch('/', function(req, res, next) {
  Student.findById({_id: req.body.id}, function(err, student) {
    if (err) console.log(err);

    student.name = req.body.name || student.name;
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
