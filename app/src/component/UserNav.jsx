import react from 'react';
import {NavLink} from 'react-router-dom';
function UserNav(){

  const st={
     textDecoration:"none",
     color:"black",
      fontSize: 20
  }
    return(
      
      <>
      <div  class="d-flex justify-content-around bg-info align-items-center  " style={{height:"3.5em"}}>
        
           <NavLink  to="/dashboard" class="mb-4 mt-3 lqq pl-1"  style={st} > Home</NavLink>
           <NavLink  to="/" class="mb-4  mt-3 lqq pl-1 " style={st}> Logout</NavLink>

           <NavLink  to="/profile" class="mb-4  mt-3  lqq  pl-1" style={st}> profile</NavLink>
           <NavLink  to="/search" class="mb-4  mt-3  lqq  pl-1" style={st}> find</NavLink>
           <NavLink  to="/contactus" class="mb-4  mt-3 lqq pl-1" style={st}> Contact us</NavLink>
           <NavLink  to="/aboutus" class="mb-4  mt-3  lqq  pl-1" style={st}> About us</NavLink>
           </div>
      </>
    );
}

export default UserNav;