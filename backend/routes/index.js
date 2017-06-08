var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
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

router.get('/doctor', function(req, res, next) {
  res.render('doctor');
});

router.get('/nurses', function(req, res, next) {
  Student.find({}, function(err, students) {
    if (err) { console.log('Database err: ', err) }

    res.render('nurses', {
      students: students
    })
  })
});

//brings up a specific student and renders information
router.get('/studentProfile/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, student) {
    if (err) console.log('err: ', err);

    res.render('studentProfile', {
      image: student.image,
      name: student.name,
      birthdate: student.dob,
      guardian: student.guardian_name,
      guardian_number: student.guardian_number,
      guardian_email: student.guardian_email,
      history: student.history,
      medications: student.medications,
      allergies: student.allergies,
      immunizations: student.immunizations,
      reports: student.report,
      id: student._id
    })
  })
});


//modal pop up for particular student report. THANKS CHARLIE
router.post('/studentProfile/:id', function(req, res, next) {
  var index = req.body.index;
  console.log(index);
  console.log(req.params.id);

  Student.findOne({ _id: req.params.id } , function(error,student){
    console.log(student.report[index]);
    res.json(student.report[index]);
  });
});

router.get('/createreport/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, student) {
      res.render('createreport', {
        name: student.name,
        image: student.image
      });
    });
});

// Ability to create report for a student by the nurse
router.post('/createreport/:id', function(req, res, next) {
  console.log('id is: ', req.params.id)
  //get a particular student ID, and then push report to database
  Student.findOne({
    _id: req.params.id
  }, function(err, student) {
    student.report.push({
      date: req.body.date,
      vitals: req.body.vitals,
      symptoms: req.body.symptoms,
      notes: req.body.notes,
    });
    // saves the report to the student in the student schema
    student.save(function(err, student) {
      if (err) {
        res.status(500).send({
          status: 'Error',
          error: err
        });
        console.log('Error: ', err);
      }
      console.log('student is: ', student)
      // redirects to the nurses homepage
      res.redirect('/nurses');
    });
  });
});

router.get('/guardian', ensureLoggedIn, function(req, res, next) {
  console.log(req.user.displayName);
  let suzieQ = Student.findOne({ guardian_email: req.user.displayName });
  suzieQ.exec()
    .then((student) => {
      if (student) {
        res.render('guardian', {
          image: student.image,
          name: student.name,
          birthdate: student.dob,
          guardian: student.guardian_name,
          guardian_number: student.guardian_number,
          guardian_email: student.guardian_email,
          medicalHistory: student.medications,
          allergies: student.allergies,
          immunizations: student.immunizations,
          reports: student.report
        });
      } else {
        res.render('error', { message: 'You don\'t have a child' });
      }
    })
    .catch((e) => {
      res.render('error', {error: e});
    });
  });

router.get('/addStudent', function(req, res, next) {
  res.render('addStudent');
});

router.post('/addStudent', function(req, res, next) {

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

  newStudent.save(function(err, student) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
      console.log('Error: ', err);
    } else {
      res.render('addStudent');
    }
  });
});

router.get('/deleteStudent/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, student) {
    if (err) console.log(err);
    res.render('deleteStudent', {
      name: student.name,
      id: student._id
    });
  });
});

router.delete('/deleteStudent/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, function(err, student) {
  res.redirect('/nurses');
});
});

router.get('/doctor', function(req, res, next) {
  res.render('doctor');
});


router.get('/login',
  function(req, res) {
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {

    // res.json(res);
    res.redirect(req.session.returnTo || '/user');
    // console.log('req4: ', req);
    console.log('res4: ', res);
  });




module.exports = router;
