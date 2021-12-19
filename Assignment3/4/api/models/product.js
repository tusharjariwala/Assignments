const mongoose=require("mongoose");
const Product=new mongoose.Schema({
    name:{type:String,default:null},
    price:{type:Number,default:null},
    qunatity:{type:Number,default:null}
})
module.exports=mongoose.model("product",Product);