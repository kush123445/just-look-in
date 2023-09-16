import react from 'react';
import walk from '../imag/walk.jpg';
import event from '../imag/event.jpg';
import rest from '../imag/rest.jpg';

function Home(prop)
{
    return(
        <div>
       <div class="card-deck-wrapper  ">
  <div class="card-deck  d-flex flex-row  mt-5 justify-content around  mh-80" style={{transition: "transform .2s" }}>
    <div class="card  lala" style={{height:"10%"}}>
      <img class="card-img-top" src={prop.namei.img1} alt="Card image cap"  ></img>
      <div class="card-block">
        <h4 class="card-title">{prop.name.img1}</h4>
        <p class="card-text">{prop.name1.img1}</p>
        
      </div>
    </div>
    <div class="card papa ">
      <img class="card-img-top" src={prop.namei.img2} alt="Card image cap"></img>
      <div class="card-block">
        <h4 class="card-title">{prop.name.img2}</h4>
        <p class="card-text">{prop.name1.img2}</p>
    
      </div>
    </div>
    <div class="card lala" style={{height:"10%"}}>
      <img class="card-img-top" src={prop.namei.img3} alt="Card image cap"></img>
      <div class="card-block">
        <h4 class="card-title">{prop.name.img3}</h4>
        <p class="card-text">{prop.name1.img3}</p>
      
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Home;