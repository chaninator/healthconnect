var express = require('express');
var router = express.Router();
var Student = require('../models/student');
var Report = require('../models/report');



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
