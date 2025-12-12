import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Products from './Products'
import Showp from './Showp'
import Cart from './Cart'
import Buynow from './Buynow'
import Orderplace from './Orderplace'
import Buynow2 from './Buynow2'
export default function Browserr() {

  const [cartData, setCart] = useState([]);
  
  const addToCart = (data) => {

    var available = false;

    cartData.forEach((myData) => {
      if (myData.product_name == data.product_name) {
        available = true;
      }
    });

    if (available) {
      alert("Data already in cart");
      return;
    }
    // else {
    //   setCart([...cartData, data]);
    // }
    setCart([...cartData, data]);
    alert("Data added in cart");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar len={cartData.length} />}>
          <Route index element={<Home />} />
          <Route path='/products/:name' element={<Products addToCart={addToCart} />} />
          <Route path='/showp/:name/:no' element={<Showp addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart cartData={cartData} setCart={setCart} />} />
          <Route path='/buynow' element={<Buynow cartData={cartData} setCart={setCart}/>}/>
          <Route path='/orderplace' element={<Orderplace/>}/>
          <Route path='/buynow2/:name/:no/:pr/:qu' element={<Buynow2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
