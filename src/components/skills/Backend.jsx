import React from 'react'
import { backendSkillSets } from '../../appContants'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Technologies</h3>

        <div className="skills__box">
            <div className="skills__group">
               {backendSkillSets.map((eachItem) => (
                  <div key={eachItem.skillName} className="skills__data">
                  <i className='bx bx-badge-check'></i>
 
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

export default Backend
