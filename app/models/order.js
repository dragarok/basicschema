var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema([{
      user_id:ObjectId,
      cart_id:ObjectId,
      product:[
        {
          product_id: ObjectId,
          quantity:Number,
          price:Number
        }
      ],
    }
  ]);
module.exports = mongoose.model('Cart', OrderSchema);
