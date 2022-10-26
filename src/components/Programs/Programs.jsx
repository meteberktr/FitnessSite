import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from  '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="Programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape</span>
        </div>
        
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.heading}</span>
                    <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" className='arrow' />
                    </div>
        </div>
            ))}
            </div>
    </div>
    
  )
}

export default Programs
