const mongoose = require('mongoose');

var schema = mongoose.Schema({
    imagePath : {type:String,required : true},
    model_name : {type:String,required : true},
    carId : {type:Number,required : true},
    distanceDriven : {type:Number,required : true},
    category : {type:String,required : true},//prime or normal or micro
    capacity : {type:Number,required : true},
    year : {type:Number,required : true},
    numberplate : {type:String, required : true},
    insuranceId: {type: Number, required: true}
});

module.exports = mongoose.model('Car',schema);  
