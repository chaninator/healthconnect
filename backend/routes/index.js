var express = require('express');
var passport = require('passport');
var router = express.Router();

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Health Connect', env: env });
});

router.get('/nurse', function(req, res, next) {
  res.render('nurse');
});

router.get('/guardian', function(req, res, next) {
  res.render('guardian');
});

router.get('/doctor', function(req, res, next) {
  res.render('doctor');
});

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
