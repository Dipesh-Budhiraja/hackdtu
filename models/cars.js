const mongoose = require('mongoose');

var schema = mongoose.Schema({
    imagePath : {type:String,required : true},
    modelName : {type:String,required : true},
    carId : {type:String,required : true},
    distanceDriven : {type:Number,required : true},
    category : {type:String,required : true},//prime or normal or micro
    capacity : {type:Number,required : true},
    dateofMfd : {type:String,required : true},
    numberplate : {type:String,required : true},
    price : {type:Number,required : true},
    // userName = {type:String,required = true},
});

module.exports = mongoose.model('car',schema);
