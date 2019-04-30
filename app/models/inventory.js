var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function toLower(v) {
    return v.toLowerCase();
  }

var InventorySchema = new Schema({
    name: String,
    quantity: String,
    specs: {
        desc : String,
        price: String,
        gender: String,
        colors: [],
        sizes: []
    },
    tags: [],
    addedDate: {type: Date, default: Date.now()},
    parent: Boolean,
    categories: [{type: String, set:toLower}]
});

InventorySchema.index({categories:1});
// Getter
InventorySchema.path('specs.price').get(function(num) {
    return (num / 100).toFixed(2);
  });

  // Setter
InventorySchema.path('specs.price').set(function(num) {
    return num * 100;
  });

module.exports = mongoose.model('Inventory', InventorySchema);
