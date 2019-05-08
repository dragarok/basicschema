var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({
    user_id:ObjectID,
    shopName: String,
    shopOwner: String,
    shopEmail: String,
    shopPhone: Number,
    address: String,
    location:
    {
        type: { type: String, default: 'Point' },
        coordinates: [Double]
    }
    itemId: [ObjectID]
});
ShopSchema.index({ "location.coordinates": "2dsphere" });

module.exports = mongoose.model('Shop', ShopSchema);
