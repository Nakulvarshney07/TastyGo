import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'


import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'



function App() {
  const [showLogin,setShowLogin]=useState(false)


  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
    <Navbar setShowLogin={setShowLogin} />
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      
    <Route path='/cart' element={<Cart />} />
    <Route path='/order' element={<PlaceOrder />} />
    <Route path='/verify' element={<Verify />}/>
    <Route path='/myorders' element={<MyOrders />} />
      
    </Routes>
     
   
      
   </div>
   <Footer />
  </>
  )
}

export default App
