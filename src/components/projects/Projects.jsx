import React from 'react'

import './projects.css'
import { githubProjects } from '../../appContants'

const Projects = () => (
  
    <section className="services section" id="projects">
    <h2 className="section__title">My Projects</h2>
    <span className="section__subtitle">What i developed</span>
      <div className='projects__container'>
        <ul className='project-list-container'>
            {githubProjects.map((eachProject) => (<li key={eachProject.id} className='each_project'>
                <div className='each-project-container'>
                    <div className='project-img-container'>
                    <img src={eachProject.sampleImg} alt={eachProject.projectName} className='project-img' />
                    </div>
                 
                    <div className='project_details-container'>
                        <p className='project_details'>{eachProject.projectDetails}</p>
                    </div>
                </div>
            </li>))}
        </ul>
       
      </div>
      </section>
  )


export default Projects
