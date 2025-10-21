import {BrowserRouter,Routes,Route,}from "react-router-dom";

import React from 'react';
import Mainpage from "./Main/Mainpage"
import Homepage from "./Main/Homepage";
import Signin from "./Main/Signin";
import Hotdrinks from "./Main/Hotdrinks"
import Colddrinks from "./Main/Colddrinks"
import Pastries from "./Main/Pastries";
import Meals from "./Main/Meals";
import AboutPage from "./Main/AboutPage";
import ContactPage from "./Main/ContactPage";
import Cart from "./Main/Cart";
import Checkout from "./Main/Checkout";
import Orders from "./Main/Orders";
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App(){
  return(
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage/>} />
                <Route path="/Home" element={<Homepage/>} />
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Hotdrinks" element={<Hotdrinks/>}/>
                <Route path="/Colddrinks" element={<Colddrinks/>} />
                <Route path="/AboutPage" element={<AboutPage/>} />
                <Route path="/ContactPage" element={<ContactPage/>} />
                <Route path="/Desserts" element={<Pastries/>} />
                <Route path="/Meals" element={<Meals/>} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;