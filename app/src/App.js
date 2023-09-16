import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



import Homepage from './component/Homepage';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Loginpage from './component/Loginpage';
import Registerpage from './component/Registerpage';
import Dash from './component/Dash';
import Aboutuspage from './component/Aboutuspage';
import Contact from './component/Contact';
import Logout from './component/Logout';
import Profile from './component/Profile';
import Add from './component/Add';
import Delete from './component/Delete';
import Addform from './component/Addform';
import Search from './component/Search';
function App() {


  localStorage.setItem("login",false)
  return (
    <>
       <BrowserRouter>
           <Routes>
              <Route  exact path="/"  element={<Homepage />} />
              <Route  exact path="/Login"  element={<Loginpage />} />
              <Route  exact path="/Register"  element={<Registerpage />} />
              <Route  exact path="/dashboard"  element={<Dash />} />
              <Route  exact path="/aboutus"  element={<Aboutuspage />} />
              <Route  exact path="/contactus"  element={<Contact />} />
              <Route  exact path="/Logout"  element={<Logout />} />
              <Route  exact path="/profile"  element={<Profile />} />
              <Route  exact path="/add"  element={<Add />} />
              <Route  exact path="/delete"  element={<Delete />} />
              <Route  exact path="/search"  element={<Search />} />
              </Routes>

       </BrowserRouter>
    
      
    </>


  );
}
export default App;
