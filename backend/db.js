const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/Paytm')

//1. user db
const UserSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minlength : 3,
        maxlength : 30
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    } 
});


//2. balance db
const AccountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

//create the model for your schema 
const User = mongoose.model('users',UserSchema)
const Account = mongoose.model("accounts",AccountSchema)
//export 
module.exports = { User, Account }