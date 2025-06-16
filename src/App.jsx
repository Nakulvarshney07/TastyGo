import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'


import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

function App() {


  return (
  <>
     <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      
    </Routes>
{/*      
    <Route path='/cart' element={<Cart />} />
    <Route path='/order' element={<PlaceOrder />} /> */}
   
      
   </div>
   <Footer />
  </>
  )
}

export default App
