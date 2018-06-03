const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const patientSchema = mongoose.Schema({

    info             : {
        name         : String,
        age          : String,
        sex          : String,
    },
    medical          : {
        findings     : String,
    },
    chatID           : {type: mongoose.Schema.Types.ObjectId, ref: 'Chat'},

});

// define the schema for our user model
const UserSchema = mongoose.Schema({
    email        : {
        type: String,
        index: {unique : true },
        },
    password     : String,
    
    info             : {
        name         : String,
        specialty    : String,
        placeWork    : String,
        //position     : String,
    },
    patients         : [patientSchema],

});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Patient', patientSchema);

