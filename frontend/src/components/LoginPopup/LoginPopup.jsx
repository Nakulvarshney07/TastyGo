import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
const [currstate,setCurrState]=useState("Login")

  return (
    <div className='login-popup'>
        <form action="" className="login-pop-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate=="Login"?<></>:  <input type="text" placeholder='Your Name' required />}
              
                <input type="email" placeholder='Your Email' required />
                <input type="Password" placeholder='password' required />
                
            </div>
            <button>{currstate==="Sign Up"?"Create account":"Login"}</button> 
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the term of use & privacy policy.</p>
            </div>
            {currstate=="Login"?  <p>Create a new account
                ?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
          

        </form>

      
    </div>
  )
}

export default LoginPopup
