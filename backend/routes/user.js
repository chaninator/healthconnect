
var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  console.log('USER ID: ', req.user.identities[0].user_id);
  console.log('EMAIL: ', req.user.displayName);
  res.render('user', { user: req.user });
});

module.exports = router;
