import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import {motion} from 'framer-motion'
const Hero = () => {
    const transition={type:'spring', duration:3}
    const mobile =window.innerWidth<=768 ? true:false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
           <div className="left-h">
            <Header/>
           <div className="the-best-ad">
            <motion.div 
            initial={{left:mobile ? "165px":'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition,type:'tween'}}>
            </motion.div>
            <span>the best fittnes club in the town</span>
           </div>
           <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape</span>
                <span> Your</span>
                </div>
                
                <div><span>
                    Ideal Body</span>
                    </div>
           
           <div >
                    <span>
                    In here we will help you to shape and build your ideal body and 
                    live up your lif to fullest
                    </span>
                </div>
                </div>
                <div className='figures'>
                <div>
                    <span>+140</span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
                   

                   

                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
           </div>
           
           <div className="right-h">
           
            <button className='btn'>Join Now</button>
            <motion.div 
            initial={{right:"-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt=""></img>
                <span>Heart Rate</span><span>116 bpm</span>  
                </motion.div>   
                
                <img src={hero_image} alt="" className='hero-image'/>
                <motion.img
                initial={{right:'1rem'}}
                whileInView={{right:'31rem'}}
                transition={transition}
                 src={hero_image_back} alt="" className='hero-image-back'>
                    </motion.img>
                <motion.div
                initial={{right:"17rem"}}
                whileInView={{right:"69rem"}}
                transition={transition}
                className="calories"
                >
                    <img src={Calories} alt=""/>
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
                </motion.div>
                </div>
                </div>
                 
                 
    );
    
};
export default Hero