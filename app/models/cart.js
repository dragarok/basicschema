var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CartSchema = new Schema([{
    state:String,
    modified_date:Timestamp,
    user_id:ObjectId,
    product:[
      {
        product_id: ObjectId,
        quantity:Number,
        price:Number
      }
    ],
  }
]);


module.exports = mongoose.model('Cart', CartSchema);
