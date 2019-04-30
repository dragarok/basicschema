var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    parent: String,
    category: String
},{ _id : false });
CategorySchema.index({category:1});
CategorySchema.index({name:1});
CategorySchema.index({parent:1});
