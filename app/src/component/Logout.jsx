import react from 'react';
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Logout()
{  
     localStorage.setItem("login",false);
     const h=useNavigate();
     
     return(
         <>
        
         </>
     )
}

export default Logout;