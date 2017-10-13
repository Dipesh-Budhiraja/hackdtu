const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema({
    username = {type:'string',required = true},
    password = {type:'string',required = true},
    phoneNumber = {type:'Number',required = true},
    email = {type:'string',required = true},
    packageType = {type:'string',required = true},
    DLnumber = {type:'string',required = true},
    AdhaarNo = {type:'string',required = true},
    // userName = {type:'string',required = true},
});
schema.methods.encryptPassword(function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
})
schema.methods.validatePassword((password)=>{
    return bcrypt.compareSync(password,this.password)
})

module.exports = mongoose.model('user',schema);
