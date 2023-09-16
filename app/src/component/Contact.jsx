import react from 'react';
import Nav from './Nav';
import UserNav from './UserNav';
import Home from './Home';
import Footer from './Footer';

import phone from '../imag/phone.jpg'
import contact from '../imag/contact.jpg'
import buzz from '../imag/buzz.jpg'
import Map from './Map'
function Contact()
{
  

    if("false"===localStorage.getItem("login"))
    {
    return(
          <>
          <Nav/>
          <Home  name={{img1 : "E - MAIL :",
                        img2 : " IT -DELHI :",
                        img3 : "PHONE :"}}  

                        namei=  {{img1 : buzz,
                            img2 : contact,
                            img3 : phone}} 
                        
                        name1={{img1 : "kushalhts00@gmail.com",
                        img2 : "LIsence : UPR00341",
                        img3 : "8218662808"}}>
                            </Home>


                            <Map></Map>
                            <div class="text-center mt-3 text-danger">
                            <p>Available for you at our office 24*7 please meet us if any query</p></div>

        <Footer></Footer>
          </>
    );
                        }

                        else{
                            return(
                            <>
                            <UserNav/>

                            <Home  name={{img1 : "E - MAIL :",
                        img2 : " IT -DELHI :",
                        img3 : "PHONE :"}}  

                        namei=  {{img1 : buzz,
                            img2 : contact,
                            img3 : phone}} 
                        
                        name1={{img1 : "kushalhts00@gmail.com",
                        img2 : "LIsence : UPR00341",
                        img3 : "8218662808"}}>
                            </Home>


                            <Map></Map>
                            <div class="text-center mt-3 text-danger">
                            <p>Available for you at our office 24*7 please meet us if any query</p></div>

        <Footer></Footer>

                            </>
                            );

                        }
}
export default Contact;