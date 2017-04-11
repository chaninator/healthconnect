var express = require('express');
var passport = require('passport');
var router = express.Router();
var Student = require('../models/student');

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Health Connect', env: env });
});

router.get('/nurses', function(req, res, next) {
  Student.find({}, function(err, students) {
    if (err) { console.log('Database err: ', err) }

    res.render('nurses', {
      student0: students[0].name,
      student0id: students[0]._id,
      student1: students[1].name,
      student1id: students[1]._id,
      student2: students[2].name,
      student2id: students[2]._id
    })
  })
});

router.get('/studentProfile/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, student) {
    if (err) {
      console.log('err: ', err);
    }
    res.render('studentProfile', {
      image: student.image,
      name: student.name,
      birthdate: student.dob,
      guardian: student.guardian_name,
      guardian_number: student.guardian_number,
      guardian_email: student.guardian_email,
      medicalHistory: student.medications,
      allergies: student.allergies,
      immunizations: student.immunizations,
      reports: student.report,
      id: student._id
    })
  })
})

router.get('/createreport/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, student) {
    if (err) { console.log('err: ', err) }
    res.render('createreport', {
      name: student.name,
      image: student.image
    })
  })
})

router.get('/guardian', function(req, res, next) {
  res.render('guardian');
});

router.get('/doctor', function(req, res, next) {
  res.render('doctor');
});

//router.get('/createreport', function(req, res, next) {
//  res.render('createreport');
//});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    // res.json(res);
    res.redirect(req.session.returnTo || '/user');
    console.log('req4: ', req);
    console.log('res4: ', res);
  });

module.exports = router;
