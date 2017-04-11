var express = require('express');
var router = express.Router();
// var models = require('../models/student');

var Student = require('../models/student')


router.patch('/', function(req, res, next) {
  console.log('id is: ', req.body.id)
  Student.findOne({
    _id: req.body.id
  }, function(err, student) {
    console.log('student is: ', student)
    student.report.push({
      date: req.body.date,
      vitals: req.body.vitals,
      symptoms: req.body.symptoms,
      call_notes: req.body.call_notes,
      treatment_plan: req.body.treatment_plan
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

router.patch('/modifyreport', function(req, res, next) {
  Student.findById({
    _id: req.body.studentid
  }, function(err, student) {
    if (err) console.log(err);


    student.report.forEach(function(report,index){
      if(report._id == req.body.reportid){
        console.log('match found!!!!!!!')
        report.date = req.body.date || report.date;
        report.vitals = req.body.vitals || report.vitals;
        report.symptoms = req.body.symptoms || report.symptoms;
        report.call_notes = req.body.call_notes || report.call_notes;
        report.treatment_plan = req.body.treatment_plans || report.treatment_plan;
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
