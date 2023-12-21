
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowseRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Productdesc from './components/Productdesc';
import CartProducts from './components/CartProducts';
import Login from './components/Login';
import CheckoutPage from './components/Checkout';
import PaymentForm from './components/PaymentForm';
import Ordersuccess from './components/Ordersuccess';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/Header" element={<Header/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productdesc" element={<Productdesc />}></Route>
          <Route path="/Cartproducts" element={<CartProducts/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/payment" element={<PaymentForm/>}></Route>
          <Route path="/ordersuccess" element={<Ordersuccess/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
