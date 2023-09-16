const mongoose = require("mongoose");

const additemschema = new mongoose.Schema({
   cityname:{
      type:String,
      uppercase:true
   },
   select:String,
   address:String,
   phone:Number,
   best:String,
   name:{
      type:String,
      uppercase:true
   },
   email:String
})

const additem = new mongoose.model("additem",additemschema)

module.exports= additem;