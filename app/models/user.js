var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    profile: {
        lastName: { type: String, default: ''},
        picture: { type: String, default: ''}
    },
    address: String,
    phone: Number,
    history: [{
        date: Date,
        paid: { type: Number, default:0},
    }]
});
