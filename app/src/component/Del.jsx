import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert2';

function Del() {
  const [emplist, setEmpList] = useState([]);
  const [msg, setMessage] = useState("");
  const email=localStorage.getItem('email')
  
  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('/search/'+ email)
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.name}</td>
          <td>{currentrow.cityname}</td>
          <td>{currentrow.best}</td>
          <td>{currentrow.address}</td>
        
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
         
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].email)
    axios.delete('/remove/' + removerow[0]._id)
      .then(res => {
        console.log(res.data)
  
        swal.fire({
          title:"DELETED",
          text:"SUCESSFULLY DELETED",
          icon:"success",
          
        })




        setEmpList(tempemplist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }


  
    return (
      <div  class="d-flex  flex-column  justify-content-center">
        
        <h3 class="d-flex justify-content-center">PLACE DETAILS</h3>
        <b  class="d-flex justify-content-center" style={{ color: "red" }}>{msg}</b>
        <table class="m-3" align="center">
          <thead>
            <tr>
              <th>NAME</th>
              <th>CITY</th>
              <th>BEST</th>
              <th>ADDRESS</th>
            </tr>
          </thead>

          <tbody>
            {viewEmpList()}
          </tbody>
        </table>
      </div>
    )
  }



export default Del