import React, { Children } from 'react'
import IntroCard from '../ProfileSections/IntroCard/IntroCard'
import FaveProjectsCard from '../ProfileSections/FaveProjectsCard/FaveProjectsCard'
import AppCard from '../ProfileSections/AppCard/AppCard'
import ProjectCard from '../ProfileSections/ProjectCard/ProjectCard'
import StudiesCard from '../ProfileSections/StudiesCard/StudiesCard'
import CurrentJob from '../ProfileSections/CurrentJob/CurrentJob'

const InfoBox = ({currentStage}) => {
  console.log("Info Box Current Stage",currentStage)
  return (
    <div className={`info-box ${currentStage > 0 ?"visible":""}`}>
      {currentStage === 1 && <IntroCard/>}
      {currentStage === 2 && <FaveProjectsCard/>}
      {currentStage === 3 && <AppCard/>}
      {currentStage === 4 && <ProjectCard/>}
      {currentStage === 5 && <StudiesCard/>}
      {currentStage === 6 && <CurrentJob/>}
    </div>
  )
}

export default InfoBox