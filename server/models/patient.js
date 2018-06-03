// app/models/patient.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var patientSchema = mongoose.Schema({

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





// create the model for users and expose it to our app
module.exports = mongoose.model('Patient', patientSchema);
