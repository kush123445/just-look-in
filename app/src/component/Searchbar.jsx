
import react,{useState,useEffect}from 'react';
import swal from 'sweetalert2';
import axios from 'axios';




function Searchbar()
{
    const [Name,setName]=useState("");
    const[select,setSelect]=useState("");
    const [emplist, setEmpList] = useState([]);
    const [msg, setMessage] = useState("");;

 




    const handleSubmit=(evt)=>{
        evt.preventDefault();
                 const selectt = select.toUpperCase()
                 console.log(selectt)
        const place={
            cityname:Name,
            select:selectt
        }
        axios.post('/search', place)
        .then(res => {
            console.log(res.data)
            if(res.data=="")
            {
              setMessage("RESULT NOT FOUND")
            }
           
            setEmpList(res.data);
          
           
            }).catch((e)=>{
              swal.fire({
                title:"FAIL",
                text:"SUCESSFULLY",
                icon:"success",
                
              })
        
        });
       
       
       
       
       
    }

   function view() {
        return emplist.map((currentrow, index) => {
          console.log(index)
          return (
            <>
            <ul class="list-group  mt-4 border border-dark  col-4 m-auto rounded  ull">
  <li class="list-group-item  border-bottom  border-dark  bg-info  lii" >{currentrow.name}</li>
  <li class="list-group-item  border-0 ">{currentrow.phone}</li>
  <li class="list-group-item   border-0">{currentrow.email}</li>
  <li class="list-group-item   border-0">{currentrow.best}</li>
  <li class="list-group-item border-0">{currentrow.address}</li>
</ul>
            </>
          )
        })
      }
      if(emplist!="")
      {
    return(
      
        <>
        <nav class="navbar navbar-light bg-light  col-10 m-auto  d-flex  justify-content-between">
 <div></div>
  <form class=" d-flex  justify-content-between ml-3"  onSubmit={handleSubmit} >

  <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"  value={select} onChange={(e)=>setSelect(e.target.value)}>
        <option selected>Choose...</option>
        <option value="HOTEL">HOTEL</option>
        <option value="RESTAURANT">RESTAURANT</option>
        <option value="RESORT">RESORT</option>
      </select>
    </div>


    <div class="d-flex ml-4">
    <input class="form-control mr-sm-2" type="search" placeholder="City Name" aria-label="Search" value={Name} onChange={(e)=>setName(e.target.value)}></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </form>
</nav>



<div>
   { view() }
</div>
        </>
    )
      }
      else{
        return(
      
          <>
          <nav class="navbar navbar-light bg-light  col-10 m-auto  d-flex  justify-content-between">
   <div></div>
    <form class=" d-flex  justify-content-between ml-3"  onSubmit={handleSubmit} >
  
    <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"  value={select} onChange={(e)=>setSelect(e.target.value)}>
          <option selected>Choose...</option>
          <option value="HOTEL">HOTEL</option>
          <option value="RESTAURANT">RESTAURANT</option>
          <option value="RESORT">RESORT</option>
        </select>
      </div>
  
  
      <div class="d-flex ml-4">
      <input class="form-control mr-sm-2" type="search" placeholder="City Name" aria-label="Search" value={Name} onChange={(e)=>setName(e.target.value)}></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </form>
  </nav>
  
  <h2 class="col-3  m-auto">{msg}</h2>
  </>
  )
      }
}

export default Searchbar;