var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function toLower(v) {
    return v.toLowerCase();
  }

var InventorySchema = new Schema({
    name: String,
    quantity: Number,
    specs: {
        desc : String,
        price: Double,
        gender: String,
        colors: [String],
        sizes: [String]
    },
    tags: [String],
    rating:[{
      user_id:Object ID,
      value:Integer
    }],
    review:[
      {
        user_id:Object ID,
        comment:String,
        likes:Integer
  }]
  //  parent: Boolean,
    categories: [{type: String, set:toLower}]
});

InventorySchema.index({categories:1});
// Getter
module.exports = mongoose.model('Inventory', InventorySchema);
