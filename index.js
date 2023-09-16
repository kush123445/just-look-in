const express=require('express');
const bodyparser =require("body-parser")
require("./src/db/conn");
const login = require("./src/models/register");
const additem = require("./src/models/additem");
const multer=require("multer");
const path=require("path");



const app = express();
var cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  app.use(cors({
    origin: '*'
}));

app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);
const pathtobuild = __dirname + '/app/build/';
app.use(express.static(pathtobuild));

const port = process.env.PORT || 5000;

app.use(bodyparser.json())
app.use(express.json());




app.post("/add",async(req,res)=>{
    try{
        console.log(req.body);
        const additemm= new additem({ 

            cityname:req.body.cityname,
            select:req.body.select,
            address:req.body.address,
            phone:req.body.phone,
            best:req.body.best,
            name:req.body.name,
            email:req.body.email
            
        })
        const insertdata= await additemm.save().then((insertdata)=>{
             console.log(insertdata);
            res.json(insertdata);

        }).catch((e)=>{
            res.send(e);
        })
        
        
      
    }catch(e){
    res.send(e);
    }
})


app.post("/search",async(req,res)=>{
    try{
        const cityname=req.body.cityname;
        const select=req.body.select; 



     const city = await  additem.find({ $and: [{cityname:cityname },{select:select}]});
     res.send(city);
     console.log(city);

    }catch(e){
        res.send(e);
    }
}
)

app.post("/profile",async(req,res)=>{
    try{
        const empemail=req.body.empemail;



     const email = await  login.findOne({empemail:empemail });
     console.log(email);
     res.send(email);
     

    }catch(e){
        res.send(e);
    }
}
)

    

app.delete('/remove/:id', (req, res) =>
            {
                additem .findOneAndRemove({"_id" : req.params.id})
          .then( deleteddocument => { 
            if(deleteddocument != null)
            {  
  res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }  
            else
            {
  res.status(404).send('INVALID EMP ID '+ req.params.id); 
            }
          }) //CLOSE THEN
          .catch( err => {
 return res.status(500).send({message: "DB Problem..Error in Delete with id " + req.params.id });          
          })//CLOSE CATCH
             }//CLOSE CALLBACK FUNCTION BODY Line 60
            ); //CLOSE Delete METHOD Line 59



app.get('/search/:emailid', (req, res) => 
            {
      additem.find({"email" : req.params.emailid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.emailid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.emailid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY Line 88
         );//CLOSE GET METHOD L








app.post("/login",async(req,res)=>{
    try{
        const empemail=req.body.adminid;
        const emppass=req.body.adminpass;
        console.log(req.body)
       



     const useremails= await  login.findOne({empemail:empemail});
     console.log("kushal",useremails)

     if(useremails==null){
       
        res.send("No");
     }
     
     else if(useremails.emppass=== emppass)
     {
      
        res.send(useremails);
       
     }
     else{
        
        res.send("No");
        console.log("not")
     }
     
       
    }catch(e){
        res.send(e);
    }
}
)





const multerStorage = multer.diskStorage({

    // destination: (req, file, cb) => {
    //   cb(null, "public");
    // },
    // filename: (req, file, cb) => {
    //   const ext = file.mimetype.split("/")[1];
    //   cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    // },
  });



const upload = multer({
    storage: multerStorage,
    limits :{fileSize : 500000}
   
  });

  const cloud=require('cloudinary');
  cloud.config({
    cloud_name : "bmc21",
    api_key : "244595523914733",
    api_secret : "nLyg93_CbOtGgqPGXyNI37P2zaM"
    
  })


  app.post("/photo",upload.single("myfiles"),(req,res)=>{
   
  console.log("lkj",req.file)
    res.send(req.file.filename)
})



app.post("/register",upload.single("myfiles"),async(req,res)=>{
       try{
       console.log( "kushal",req.body)
       console.log(req.file)
       const img=await cloud.v2.uploader.upload(req.file.path);
       console.log(img)
    
          
           const addlogin= new login({ 

           
               empfname: req.body.empfname ,
               emplname: req.body.emplname,
              empemail: req.body.empemail,
              emppass:req.body.emppass,
              image:img.secure_url,
              cloud_id:img.public_id
             
              
               
           })
           const ins= await addlogin.save().then((ins)=>{
               res.send(ins);
               console.log(ins);
               
                     
           }).catch((e)=>{
               res.send("NO");
              
           })
           
           
         
       }catch(e){
       res.send(e);
       }
})






app.delete('/deregister/:email', async(req, res) =>
            {
                try{
              const user=await login.find({empemail:req.params.email})
              console.log(user)
              console.log(user[0].cloud_id)
             // const cloud_id="bpf5ovmyw2a1aijggotv"


              const deleteAccount=    await  login .find({empemail : req.params.email})
              console.log(deleteAccount)

              if(deleteAccount.length!=0){
                console.log(deleteAccount[0].cloud_id,"kushal")
                if(deleteAccount[0].cloud_id != ""){
                    const cloudi=   await cloud.uploader.destroy(user[0].cloud_id);
                }
                const deleteddocument=    await  login .findOneAndRemove({empemail : req.params.email})
              }else{
                console.log("deleted sab kuch");
              }
              

              const deldoc =await additem.find({empemail : req.params.email})

              if(deldoc.length!=0){
               
                const deldocuments =await additem.deleteMany({empemail : req.params.email});
                res.send("deleted sab kuch");
              }
              else{
                console.log("place deleted");
                res.send("deleted sab kuch");
              }


              






           

        //   const deleteddocument=    await  login .findOneAndRemove({empemail : req.params.email})
        //   .then(async(res)=>{
        //     const deldoc =await additem.deleteMany({empemail : req.params.email})
        //     .then(async(res)=>{
        //         const cloudi=   await cloud.uploader.destroy(user[0].cloud_id);

        //     })
        //   })
        
          

        //   const loginuser= await  login.findOne({empemail:req.params.email});
        //   const addplace= await  login.findOne({empemail:req.params.email});

        //   if(loginuser==null && addplace==null){
        //     res.status(200).send('DOCUMENT  DELETED successfully!' );
        //   }
        //   else{
        //     res.status(500).send('DOCUMENT not DELETED successfully!' );
        //   }
            }
            catch(e){
                console.log(e)
                res.status(500).send('DOCUMENT not DELETED successfully!' );
            }
            }); 
        //close


        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
          });


app.listen(port,()=>{
    console.log(`connection is live at ${port}`);
})