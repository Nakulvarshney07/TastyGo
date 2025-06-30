import React, { useContext, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
const [currstate,setCurrState]=useState("Login")
const {url,setToken}=useContext(StoreContext)
const [data,setData]=useState({
    name:"",
    email:"",
    password:""
})


const onChangeHandler=(event)=>{   
    const name=event.target.name;
    const value=event.target.value;
   
    setData(data=>({...data,[name]:value}))
}

const onLogin=async (event)=>{
    event.preventDefault();
    let newUrl=url;
    if(currstate==="Login"){
        newUrl+="/api/user/login"
    }
    else{
        newUrl+="/api/user/register"
    }

    const respone =await axios.post(newUrl,data)
    if(respone.data.success){
        setToken(respone.data.token)
        localStorage.setItem("token",respone.data.token)
        setShowLogin(false)
    }
    else{
        alert(respone.data.message)
    }

}

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-pop-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Login"?<></>:  <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
              
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
                
            </div>
            <button type='submit'>{currstate==="Sign Up"?"Create account":"Login"}</button> 
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
