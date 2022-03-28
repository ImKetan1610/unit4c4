/*
firstName ( String, required)
lastName ( String, optional)
email ( String, required)
password ( String, required)
createdAt
updatedAt
*/


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { nextTick } = require("process");

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:false},   
    email:{type:String, required:true},
    password:{type:String, required:true}, 
},{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save", function(text){
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    return next();
});

userSchema.method.checkPasword= function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model("user",userSchema);