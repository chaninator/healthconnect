
var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  //console.log('USER ID: ', req.user.identities[0].user_id);
  //console.log('EMAIL: ', req.user.displayName);
  /*var email = req.user.displayName;
  Student.find({guardian_email: email}, function(err, student) {
    res.render('user', {
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
    });
  });*/
});

module.exports = router;
