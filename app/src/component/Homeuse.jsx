import react from 'react';

import palm from '../imag/palm.jpg';

function Home()
{
    return(
      <div>
          <div class="card bg-dark text-white mh-25 ">
  <img src={palm} class="card-img     " alt="..."></img>
  <div class="card-img-overlay">
    <h1 class="card-title  ">PREMIUM QUALITY FOR YOU</h1>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>

      </div>
        
    );
}

export default Home;