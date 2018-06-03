const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  
  const userData = {
    email: email.trim(),
    password: password.trim(),
    info:  {
      name: req.body.name.trim(),
      specialty: req.body.speciality.trim(),
      workPlace: req.body.workPlace.trim()
      }
    //newUser.info.position: req.body.position.trim()
    };
  //console.log(userData);
  const newUser = new User(userData);
  console.log(newUser)
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
