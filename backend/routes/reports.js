var express = require('express');
var router = express.Router();
// var models = require('../models/student');

var Student = require('../models/student')


router.post('/', function(req, res, next) {
  console.log('id is: ', req.body.id)
  Student.findOne({
    _id: req.body.id
  }, function(err, student) {
    console.log('student is: ', student)
    student.report.push({
      // date: req.body.date,
      vitals: req.body.vitals,
      symptoms: req.body.symptoms,
      notes: req.body.notes,
    });

    student.save(function(err, student) {
      if (err) {
        res.status(500).send({
          status: 'Error',
          error: err
        });
        console.log('Error: ', err);
      }

      res.json(student);
    });
  });
})

router.post('/createreport', function(req, res, next) {
/// showuld there be a module to give you the option to speak with a doctor. can choose to skip. then goes to notes section
    console.log('id is: ', req.body.id)
    Student.findOne({
      _id: req.body.id
    }, function(err, student) {
      console.log('student is: ', student)
      student.report.push({
        // date: req.body.date,
        vitals: req.body.vitals,
        symptoms: req.body.symptoms,
        notes: req.body.notes,
        // treatment_plan: req.body.treatment_plan
      });

      student.save(function(err, student) {
        if (err) {
          res.status(500).send({
            status: 'Error',
            error: err
          });
          console.log('Error: ', err);
        }
        console.log(student);
        res.json(student);
      });
    });
});

router.patch('/modifyreport', function(req, res, next) {
  Student.findById({
    _id: req.body.studentid
  }, function(err, student) {
    if (err) console.log(err);


    student.report.forEach(function(report,index){
      if(report._id == req.body.reportid){
        console.log('match found!!!!!!!')
        // report.date = req.body.date || report.date;
        report.vitals = req.body.vitals || report.vitals;
        report.symptoms = req.body.symptoms || report.symptoms;
        report.notes = req.body.notes || report.notes;
      }
    });

    student.save(function(err, student) {
      if (err) console.log(err);

      res.json({
        status: 'updated!',
        updated_report: student
      });
    });

  });
});
//
//
module.exports = router;
