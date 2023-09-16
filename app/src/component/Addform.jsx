import react,{useState}from 'react';
import swal from 'sweetalert2';
import axios from 'axios';
function Additem()
{
  
  const [Name,setName]=useState("");;
  const [City,setCity]=useState("");;
  const [Number,setNumber]=useState("");;
  const [Email,setEmail]=useState("");;
  const[Address,setAddress]=useState("");;
  const[BestThing,setBestThing]=useState("");
  const[select,setSelect]=useState("");
  
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    
    console.log(`Name:${Name}`);
    console.log(`City:${City}`);
    console.log(`Number:${Number}`);
    console.log(`Email:${Email}`);
    console.log(`Address:${Address}`);
    console.log(`BestThing:${BestThing}`);
    console.log(`select:${select}`);

    const selectt=select.toUpperCase()
    const Emaill=localStorage.getItem('email')
   const place={
      cityname:City,
      name:Name,
      email:Emaill,
      address:Address,
      phone:Number,
      best:BestThing,
      select:selectt
 }

 axios.post('/add', place)
 .then(res => {
     console.log(res.data)
    
    
     swal.fire({
       title:"ADD",
       text:"SUCESSFULLY ADDED",
       icon:"success",
       
     })
    
     }).catch((e)=>{
       swal.fire({
         title:"FAIL",
         text:"SUCESSFULLY",
         icon:"success",
         
       })
 
 });
 setName("");
 setCity(""); setEmail(""); setAddress(""); setBestThing(""); setSelect("");setNumber("");


    
  }
    return(
        <>
         <div    className="ml-2  d-flex justify-content-center"  >
    
    <form  onSubmit={handleSubmit} className="w-25  mt-5   border border-info  p-5 border-2 rounded-3 text-center"  >
    <h2 className="text-primary  mb-3" >ADD ITEMS:</h2>
    <div className="row mb-4">
      
      <div className="col">
        <div className="form-outline">
          <input type="text"value={Name} onChange={(e)=>setName(e.target.value)} id="form3Example2" className="form-control" required placeholder=" name" />
          <label htmlFor="form3Example2" ></label>
        </div>
      </div>
    </div>


    <div className="form-group">
  <label htmlFor="usr"></label>
  <input type="text" value={City} onChange={(e)=>setCity(e.target.value)} className="form-control mb-3" id="usr"required  placeholder="City"></input>
</div>

<div className="form-group">
  <label htmlFor="usr"></label>
  <input type="tel" pattern="^\d{10}$"    min="0"  max="9" value={Number} onChange={(e)=>setNumber(e.target.value)} className="form-control mb-3" id="usr" required placeholder="xxx-xxx-xxxx"></input>
</div>

    <select className="form-select mb-3" aria-label="Default select example" required value={select} onChange={(e)=>setSelect(e.target.value)}>
  <option select="true">Open this select menu</option>
  <option value="HOTEL">HOTEL</option>
  <option value="Restaurant">RESTAURANT</option>
  <option value="Resort">RESORT</option>
</select>
  
  {/*  <div className="form-outline mb-4">
      <input type="email"value={Email} onChange={(e)=>setEmail(e.target.value)} id="form3Example3"required className="form-control"   placeholder="E-MAIL ADDRESS" />
      <label  htmlFor="form3Example3"></label>
    </div>*/}
  
    <div className="mb-3">
    
  <label htmlFor="exampleFormControlTextarea1">Example Address :</label>
  <textarea className="form-control"value={Address} onChange={(e)=>setAddress(e.target.value)} required id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
  
    <div className="form-group">
  <label htmlFor="comment">Best thing :</label>
  <textarea className="form-control" rows="3"value={BestThing} onChange={(e)=>setBestThing(e.target.value)}required  id="comment"></textarea>
</div>
  
    <button type="submit" className="btn btn-primary btn-block mb-4 mt-2" >Submit</button>
  
   
   
  </form>
    
  </div>
        
        </>
    );
}

export default Additem;