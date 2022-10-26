import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll";
const Header = () => {
  const mobile=window.innerWidth<=768 ? true:false;
  const[menuOpened,setMenuOpened]=useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="" className='logo' />
      {(menuOpened===false && mobile===true)?(
       <div style={{backgroundColor:'var(--appColor)'
       ,padding:'0.7rem',
       borderRadius:'5px'}}
       onClick={()=>setMenuOpened(true)}
       >
        <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/></div>
      ):(
    <ul className="header-menu">
       <li> 
        <Link
        onClick={()=>setMenuOpened(false)}
        activeClass='active'
         to='header'
         spy={true}
         smooth={true}
       
        >Home</Link></li>
        <li onClick={()=>setMenuOpened(false)}>Programs</li>
        <li onClick={()=>setMenuOpened(false)}>Why Us</li>
        <li onClick={()=>setMenuOpened(false)}>Plans</li>
        <li><Link 
        onClick={()=>setMenuOpened(false)}
        to='testimonials'
        span={true}
        smooth={true}
      >Testimonials</Link></li>
    </ul>
  )}
  </div>
  )
}

export default Header
