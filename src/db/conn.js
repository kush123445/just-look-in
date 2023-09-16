const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://kushalhts00:12nNN12@justcheckin.6ya08gs.mongodb.net/?retryWrites=true&w=majority",{
  
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify:true,
    // useCreateIndex:true
    
    useNewUrlParser: true, 

useUnifiedTopology: true 
  
  
}).then(()=>  console.log("success connection")
  
).catch((e)=>console.log(e)
    
);