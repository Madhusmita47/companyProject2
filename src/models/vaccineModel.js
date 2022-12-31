const mongoose=require("mongoose")

const vaccineSchema=new mongoose.Schema({
    drive:{
        type:Date,
        required:true
    },
    timing:{
        type:Date,
        required:true
    },
    slot:{
        type:Date,
        required:true
    },
    dosePerSlot:{
        type:Number,
        required:true
    }
})




module.exports=mongoose.model("vaccine",vaccineSchema)