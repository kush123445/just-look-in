import react from 'react';
import Nav from './Nav';
import UserNav from './UserNav';
import Home from './Home';
import Footer from './Footer';

import women from '../imag/women.jpg'
import ww from '../imag/ww.jpg'
import bora from '../imag/bora.jpg'
function  Aboutus()
{
    
 
    if("false"===localStorage.getItem("login"))
    {
    return(
          <>
          <Nav/>
          <Home  name={{img1 : "PREMIUM QUALITY  EATABLE",
                        img2 : "BEST PLACE VISIT",
                        img3 : "SPECIAL DESTINATION"}}  

                        namei=  {{img1 : women,
                            img2 : bora,
                            img3 : ww}} 
                        
                        name1={{img1 : "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                        img2 : "This card has supporting text below as a natural lead-in to additional content.",
                        img3 : "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."}}>
                            </Home>

        <Footer></Footer>
          </>
    );
                        }
                        else{
                            return(
                                <>
                                  <UserNav/>
          <Home  name={{img1 : "PREMIUM QUALITY  EATABLE",
                        img2 : "BEST PLACE VISIT",
                        img3 : "SPECIAL DESTINATION"}}  

                        namei=  {{img1 : women,
                            img2 : bora,
                            img3 : ww}} 
                        
                        name1={{img1 : "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                        img2 : "This card has supporting text below as a natural lead-in to additional content.",
                        img3 : "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."}}>
                            </Home>

        <Footer></Footer>
                                </>
                            );
                        }
}
export default Aboutus;