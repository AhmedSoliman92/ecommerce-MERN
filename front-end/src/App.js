import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/auth/Register";
import Single from "./pages/singleProduct/Single";
import Categories from "./pages/categories/Categories";
import Products from './pages/products/Products'
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
function App() {
  const {currentUser} = useSelector(state=>state.user)
  return (
      
        <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cat' element={<Categories/>}/>
        <Route path='/login' element={currentUser?<Home/>:<Login/>}/>
        <Route path='/register' element={currentUser?<Home/>:<Register/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/:id' element={<Single/>}/>
        
        </Routes>

      </Router>

        </>
  );
}

export default App;
