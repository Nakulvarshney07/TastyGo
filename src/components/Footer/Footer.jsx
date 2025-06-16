import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo ea hic harum aliquid! Fuga, aliquam exercitationem illum maxime cupiditate minima, expedita nisi cum nobis quas sit. Sed, excepturi natus!</p>
                <div className="footer-social-icons">
                        <img src={assets.fb_icon} alt="" />
                        <img src={assets.tw_icon} alt="" />
                        <img src={assets.li_icon} alt="" />
                </div>
            </div>
             <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-3233</li>
                    <li>contact @FoodiGo.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 @FoodiGo.com-All Right Reserved
        </p>

      
    </div>
  )
}

export default Footer
