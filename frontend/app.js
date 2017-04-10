$(document).ready(function() {

  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      params: { scope: 'openid email' } //Details: https://auth0.com/docs/scopes
    }
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
});
