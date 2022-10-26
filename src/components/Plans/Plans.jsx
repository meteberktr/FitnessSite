import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'25rem'}}>
      <span className='stroke-text'>Ready to start</span>
      <span>Your Journey</span>
      <span className='stroke-text'>Now Withus</span>
    </div>
    <div className="plans">
        {plansData.map((plan, i)=> (
<div className="plan">
    {plan.icon}
    <span>{plan.name}</span>
    <span>{plan.price}</span>
    <div className="features">
        {plan.features.map((feature, i)=>(
<div className="feature">
    <img src={whiteTick} alt=""/>
    <span key={1}>{feature}</span>
    </div>
        
) )}
        
        
        </div>
    
    

        <div>
            <span>See more benefits-></span>
        </div>
    
        <button className="btn">Join now</button>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Plans
