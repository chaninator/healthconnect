var express = require('express');
var router = express.Router();
var Student = require('../models/student');

// var Report = require('../models/report');

//var Report = require('../models/report');
/*
router.get('/:id', function(req, res, next) {
  Student.find({}, function(err, students) {
    if (err) console.log('Database err: ', err)

    console.log('Students: ', students);
    res.render('nurses', {
      students: students
    })
  })
})
*/

/* Get a student */
router.get('/:id', function(req, res, next) {
    Student.find({
        _id: req.params.id
    }, function(err, post) {
        if (err) {
            console.log(err);
        }

        res.json(student);
    });
});


router.patch('/', function(req, res, next) {
    Student.findById(req.body.id, function(err, name) {
        if (err) console.log(err);

        name.name = req.body.name || name.name;

        name.save(function(err, name) {
            if (err) console.log(err);

            res.json({
                status: 'updated!',
                updated_name: name
            });
        });

    });
});
// -------->>>> Added studentId to router in order to try to save report data
// router.patch('/createreport/:studentId', function(req, res, next) {
    // Student.findById(req.body.id, function(err, name) {
    //     if (err) console.log(err);
    //
    //     name.name = req.body.name || name.name;
    //
    //     name.save(function(err, name) {
    //         if (err) console.log(err);
    //
    //         res.json({
    //             status: 'updated!',
    //             updated_name: name
    //         });
    //     });
    //
    // });

//     console.log('id is: ', req.body.id)
//     Student.findOne({
//       _id: req.body.id
//     }, function(err, student) {
//       console.log('student is: ', student)
//       student.report.push({
//         date: req.body.date,
//         vitals: req.body.vitals,
//         symptoms: req.body.symptoms,
//         call_notes: req.body.call_notes,
//         treatment_plan: req.body.treatment_plan
//       });
//
//       student.save(function(err, student) {
//         if (err) {
//           res.status(500).send({
//             status: 'Error',
//             error: err
//           });
//           console.log('Error: ', err);
//         }
//
//         res.json(student);
//       });
//     });
// });

router.delete('/', function(req, res, next) {
    Student.findByIdAndRemove(req.body.id, function(err, name) {
        if (err) console.log(err);
        res.json({
            status: 'deleted!',
            name: name
        });
    });

});


module.exports = router;
