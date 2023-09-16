import react from 'react';
import React, { useState } from 'react';
import axios from 'axios';
//import {useHistory} from 'react-router-dom';
import {useNavigate} from "react-router-dom"



function Login() {
  
 

    //  const history=useHistory();
    const navigate=useNavigate();

  
    const [adminid, setAdminId] = useState("");
    const [adminpass, setAdminPass] = useState("");
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`EMAIL: ${adminid}`);
        console.log(`PASS: ${adminpass}`);

        const emplogin={
          adminid:adminid,
          adminpass:adminpass
        }

        
    axios.post('/login', emplogin)
    .then(res => {
        console.log(res.data)

        const rdta=res.data;

       if(res.data!="No")  
       {
        localStorage.setItem("login",true)
        localStorage.setItem("email",adminid)
        
      //  history.push('/dashboard');
        navigate('/dashboard');
       }
       else if(rdta=="No"){
        setMessage('INVALID UID OR PASSWORD')
        
       }
       

          
        })
        
    
    setAdminId("");
    setAdminPass("");
    
           
    }







    return (
      <div class="  d-flex justify-content-center  mt-2 "  >
        
        <form  class="w-25 mt-5  border border-info  p-5 border-2 rounded-3 text-center" onSubmit={handleSubmit}>
        <h2 class="text-primary  mb-3">LOGIN:</h2>
    <div class="mb-3">
      <br></br>
<b>{msg}</b>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  autoComplete="off" required value={adminid}
                    onChange={(e) => setAdminId(e.target.value)  }></input>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>


    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"  value={adminpass}
                    onChange={(e) => setAdminPass(e.target.value)}></input>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
  </form>
      </div>
    );
   
  }
  

 
  export default Login;
