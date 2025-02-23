const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(error){
        console.log("There was a problem connecting to the database : "+ error)
    }
}

dbConnection();

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    username : {
        type : String,
        lowercase : true,
        required : true,
    },
    password : String,
    google_auth : {
        type : Boolean,
        default : false
    },
    coins : {
        type: Number,
        required : true,
        default : 10

    }
})

const userModel = mongoose.model("users",userSchema);

module.exports = {
    userModel
}