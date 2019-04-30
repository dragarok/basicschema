var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellerSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    joinedDate: {type: Date, default: Date.now},
    shop: {
        shopName: String,
        shopOwner: String,
        shopEmail: String,
        shopPhone: Number,
        address: String,
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number]
    },
    items: []
});

SellerSchema.index({ "location.coordinates": "2dsphere" });

module.exports = mongoose.model('Seller', SellerSchema);

