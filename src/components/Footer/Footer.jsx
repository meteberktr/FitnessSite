import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container"> 
        <hr/>
        <div className="footer">
        <div className="social-links">
            <img src={Instagram} alt=""/>
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            
    </div>
    <div className="logo-f" alt="">
      
    <img src={Logo} alt="" />
    </div>
    
    </div>
    <div className="blur-f-2"></div>
    <div className="blur-f-1"></div>
    
    </div>
    
  )
}

export default Footer;
