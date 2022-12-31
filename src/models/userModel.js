const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    adharNumber:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("user",userSchema)