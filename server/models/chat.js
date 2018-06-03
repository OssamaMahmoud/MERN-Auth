// app/models/patient.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var message = mongoose.Schema({
    sender              : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    body                : String,
    created_at           : { type: Date, default: Date.now },

});

var chat = mongoose.Schema({
    members         : [ {type: mongoose.Schema.Types.ObjectId, ref: 'User'} ],
    messages        : [ message ],
});




// create the model for users and expose it to our app
module.exports = mongoose.model('Chat', chat);
module.exports = mongoose.model('Message', message);