import React from 'react'
import { frontendSkillSets } from '../../appContants'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Technologies</h3>

        <div className="skills__box">
            <div className="skills__group">
               {frontendSkillSets.map((eachItem) => (
                  <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
 
                  <div>
                     <h3 className="skills__name">{eachItem.skillName}</h3>
                     <span className="skills__level">{eachItem.skillLevel}</span>
                  </div>
                 </div>
               ))}
  
            </div>
        </div>
    </div>
  )
}

export default Frontend
