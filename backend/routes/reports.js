var express = require('express');
var router = express.Router();

var Student = require('../models/student')


router.patch('/', function(req, res, next) {
      console.log('id is: ', req.body.id)
      Student.findOne({ _id: req.body.id },function(err, student){
        console.log('student is: ', student)
        student.report.push({
            date: req.body.date,
            vitals: req.body.vitals,
            symptoms: req.body.symptoms,
            call_notes: req.body.call_notes,
            treatment_plan: req.body.treatment_plan
          });

          student.save(function(err,student){
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



      module.exports = router;
