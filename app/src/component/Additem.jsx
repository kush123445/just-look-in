import react from 'react';
function Additem()
{
    return(
        <>
         <div    class="ml-5 d-flex justify-content-center  mt-5 mb-5"  >
    
    <form className="w-25  mt-5   border border-info  p-5 border-2 rounded-3 text-center"  >
    <h2 class="text-primary  mb-3">ADD ITEMS:</h2>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form3Example1" className="form-control" placeholder="Username" />
          <label className="form-label" for="form3Example1"></label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form3Example2" className="form-control"  placeholder="Placd name" />
          <label className="form-label" for="form3Example2"></label>
        </div>
      </div>
    </div>


    <div class="form-group">
  <label for="usr"></label>
  <input type="text" class="form-control mb-3" id="usr" placeholder="City"></input>
</div>

<div class="form-group">
  <label for="usr"></label>
  <input type="number" class="form-control mb-3" id="usr" placeholder="xxx-xxx-xxxx"></input>
</div>

    <select class="form-select mb-3" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="HOTEL">HOTEL</option>
  <option value="2">RESTAURANT</option>
  <option value="3">RESORT</option>
</select>
  
    <div className="form-outline mb-4">
      <input type="email" id="form3Example3" className="form-control"   placeholder="E-MAIL ADDRESS" />
      <label className="form-label" for="form3Example3"></label>
    </div>
  
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example Address :</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
  
    <div class="form-group">
  <label for="comment">Best thing :</label>
  <textarea class="form-control" rows="3" id="comment"></textarea>
</div>
  
    <button type="submit" className="btn btn-primary btn-block mb-4 mt-2" >Submit</button>
  
   
   
  </form>
    
  </div>
        
        </>
    );
}

export default Additem;