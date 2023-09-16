import react from 'react';
import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert2';
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Register() {
 const navigate=useNavigate();

  const [efname, setEmpfName] = useState("");
  const [elname, setEmplName] = useState("");
  const [eemail, setEmpEmail] = useState("");;
  const [epass, setEmpPass] = useState("");
  const [ephoto, setEmpphoto] = useState("");
  const [photo, setphoto] = useState("");
  const [msg, setMessage] = useState("");;
  

  const onChangeEmpfName = (e) => setEmpfName(e.target.value);

 
  
  const onChangeEmplName = (e) => setEmplName(e.target.value);

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
 
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);



 {/* const uploadImage =async () => {
    const data = new FormData()
    data.append("file",ephoto )
    data.append("upload_preset", "profile")
    data.append("cloud_name","bmc12")
    await fetch("  https://api.cloudinary.com/v1_1/bmc12/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data.url);
    setphoto(data.url); 

    })
    .catch(err => console.log(err))
    }*/}
    

 


  const uploadimage = (evt) => {
    evt.preventDefault();
 

    // const data = new FormData()
    // data.append("file",ephoto )
    // data.append("upload_preset", "photo1")
    // data.append("cloud_name","bmc21")
    //   fetch("https://api.cloudinary.com/v1_1/bmc21/image/upload",{
    // method:"post",
    // body: data
    // })
    //  .then(resp =>resp.json())
    // .then(data => {
    //   console.log(data.url);
    //   setphoto(data.url); 

    // })
    // .catch(err => console.log(err))


    // console.log(photo);


  // handleSubmit();


  }

 

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${efname}`);
    console.log(`EMAIL: ${eemail}`);
    // console.log(`photo: ${photo}`);
    const empinfo = {
      empfname: efname,
      emplname: elname,
      empemail: eemail,
      
      emppass: epass,
      
     
  }

   
    const data=new FormData();
    
    data.append("myfiles",ephoto);
   await axios.post('/photo',data,  { headers: {'Content-Type': 'multipart/form-data'}})
    .then(res=>{
      console.log(res.data);
      
      empinfo["image"]=res.data;
    })
    // data.append('username',name);
   
    
    console.log(data);  
    
  console.log(empinfo)
 
  
     axios.post('/register', empinfo)
    
    .then(res => {
        console.log(res.data)
        if(res.data=="NO")
        {
          swal.fire({
            title:"FAIL",
            text:"E-MAIL ALREADY EXIST",
            icon:"error",
            
          })
        }
        else
        {

        
       
        swal.fire({
          title:"REGISTERED",
          text:"SUCESSFULLY",
          icon:"success",
          
        })
       // history.push("/login");
       navigate("/login")
      }
        }).catch((e)=>{
          swal.fire({
            title:"FAIL",
            text:"SUCESSFULLY",
            icon:"success",
            
          })
    
    });
    console.log(photo);

setEmpfName('')

setEmplName('')
setEmpEmail('')
setEmpphoto('')
 setEmpPass('')

  



  }

  
  return (

      
      <div   class="  d-flex justify-content-center  mt-5 mb-5 "  >
    
    <form className="w-25  mt-5   border border-info  p-5 border-2 rounded-3 text-center"  onSubmit={handleSubmit}  >
    <h2 class="text-primary  mb-3">REGISTER:</h2>
    <h4 style={{ color: "brown" }}> {msg}</h4>
   
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" value={efname}
                    onChange={onChangeEmpfName}      id="form3Example1" className="form-control" placeholder="FIRST NAME" />
          <label className="form-label" for="form3Example1"></label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" value={elname}
                    onChange={onChangeEmplName}id="form3Example2" className="form-control"  placeholder="LAST NAME"  />
          <label className="form-label" for="form3Example2"></label>
        </div>
      </div>
    </div>
  
    <div className="form-outline mb-4">
      <input type="email" value={eemail}
                    onChange={onChangeEmpEmail}    id="form3Example3" className="form-control"   placeholder="E-MAIL ADDRESS"  />
      <label className="form-label" for="form3Example3"></label>
    </div>
  
  
    <div className="form-outline mb-4">
      <input type="password" value={epass}
                    onChange={onChangeEmpPass} id="form3Example4" className="form-control"  placeholder="PASSWORD"  />
      <label className="form-label" for="form3Example4"></label>
    </div>
  

    <div class="form-group">
    <label for="exampleFormControlFile1">profile photo</label>
    <input type="file" name="myfiles" class="form-control-file" id="exampleFormControlFile1" onChange={(e)=>setEmpphoto(e.target.files[0])}    ></input>
    
  </div>

 
  
    <button type="submit" className="btn btn-primary btn-block mb-4"    >Sign up</button>
  
   
   
  </form>
    
  </div>
  
    );
  }
  
  export default Register;