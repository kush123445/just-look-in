import react from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

import walk from '../imag/walk.jpg';
import event from '../imag/event.jpg';
import rest from '../imag/rest.jpg';

function Homepage()
{
  localStorage.setItem("login",false);
    return(

        <>
           <Nav></Nav>
           <Home name={{img1 : "HOTELS  for you",
                        img2 : "RESTAURANTS for you",
                        img3 : "BANQUET for you"}}  

                      namei=  {{img1 : walk,
                        img2 : rest,
                        img3 : event}} 
                        
                        name1={{img1 : "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                        img2 : "This card has supporting text below as a natural lead-in to additional content.",
                        img3 : "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."}}>
                            
                             </Home>
                             <br></br>

                             
                             <div class="home_div">
                              <p id="home_font">
                                Search Your Place Here !!
                              </p>
                           
 
</div>


           <Footer></Footer>

        </>

    );
}

export default Homepage;