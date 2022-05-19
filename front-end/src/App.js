//import Category from "./pages/category/Category";

import Bar from "./components/bar/Bar";
import Footer from "./components/footer/Footer";
//import Login from "./pages/auth/Login";
import Checkout from "./pages/checkout/Checkout";
//import Register from "./pages/auth/Register";
//import Single from "./pages/singleProduct/Single";

//import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Bar/>
      {/* <Home/>
      <Category/>
      <Single/>
      <Login/> */}
      <Checkout/>
      <Footer/>
    </>
  );
}

export default App;
