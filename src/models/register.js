const mongoose = require("mongoose");

const registerschema = new mongoose.Schema({
      empfname: String,
      emplname:String,
      empemail: {
            type:String,
            unique:true
      },
      emppass:String  ,
      image :String,
      cloud_id: String
     
      
})


const login = new mongoose.model("login",registerschema)


module.exports= login;