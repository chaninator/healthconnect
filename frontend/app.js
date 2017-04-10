$(document).ready(function() {
  var options = {
      theme: {
          logo: 'http://vignette2.wikia.nocookie.net/steven-universe/images/8/8a/Sanic_by_lazyturtle-d5h8ww3.png',
          primaryColor: '#8AD9BB',
          foregroundColor: "#000000"
      },
      closable: false,
      languageDictionary: {
          emailInputPlaceholder: "nurse@email.com",
          title: "Health Connect"
      },
      auth: {
          redirectUrl: '<%= env.AUTH0_CALLBACK_URL %>',
          responseType: 'code',
          params: {
              scope: 'openid name email picture'
          }
      }
  };
  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      params: { scope: 'openid email' } //Details: https://auth0.com/docs/scopes
    }, options
  });


  var domain = 'https://nameless-falls-11287.herokuapp.com';
  var socket = io(domain);

  socket.on('connect', function(){
    console.log('Connected!');
  });

  // What we want to do once we've logged in
  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      // Display user information
      show_profile_info(profile);
    });
  });

  function setHandlers(){


      $('.log-in').click(function(e) {
        e.preventDefault();
        lock.show();
      });

      // $('.btn-logout').click(function(e) {
      //   e.preventDefault();
      //   logout();
      // })


      });
    };

});
