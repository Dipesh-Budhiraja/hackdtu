const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema({
    username : {type:String,required : true},
    password : {type:String,required : true},
    name : {type:String,required : true},
    phoneNumber : {type:Number,required : true},
    email : {type:String,required : true},
    // packageType : {type:String,required : true},
    dlnumber : {type:String,required : true},
    adhaarNo : {type:String,required : true},
    // userName = {type:String,required = true},
});
schema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}
schema.methods.validatePassword = (password)=>{
    return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model('user',schema);
