var express = require('express');
var router = express.Router();
var Student = require('../models/student')

// router.post('/:studentId', function(req, res, next) {
//
//   console.log('id is: ', req.params.studentId)
//   Student.findOne({
//     _id: req.params.studentId
//   }, function(err, student) {
//     console.log('student is: ', student)
//     student.report.push({
//       vitals: req.body.vitals,
//       symptoms: req.body.symptoms,
//       notes: req.body.notes,
//     });
//
//     student.save(function(err, student) {
//       if (err) {
//         res.status(500).send({
//           status: 'Error',
//           error: err
//         });
//         console.log('Error: ', err);
//       }
//
//       res.json(student);
//     });
//   });
// })

module.exports = router;
