import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/auth/Register";
import Single from "./pages/singleProduct/Single";
import Category from "./pages/category/Category";

import Home from "./pages/home/Home";
function App() {
  return (
      
        <>


      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cat' element={<Category/>}/>
        <Route path='/:id' element={<Single/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        </Routes>

      </Router>

        </>
  );
}

export default App;
