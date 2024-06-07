import React, { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import "./HomePage.css"
import {Island} from "./assets/foxs_islands/Scene.jsx"
import { OrbitControls } from "@react-three/drei"
import PlayButton from '../PlayButton/PlayButton.jsx'
import { mediaConstants } from '../../config/mediaConstants.js'
import InfoBox from '../InfoBox/InfoBox.jsx'
const HomePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStage,setCurrentStage] = useState(1);

    useEffect(()=>{
      const audio = new Audio(mediaConstants.musicPath);
      audio.volume = 0.5;
      audio.loop = true;
      if(isPlaying){
        audio.play();
      }
      return()=>{
        audio.pause();
      }

    },[isPlaying])
  return (
    <>
    <div className="homepage-container">

      <InfoBox currentStage={currentStage}/>

      <div className="logo-container">
        <img src={mediaConstants.logo} alt="" />
      </div>
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        <Canvas camera={{fov:60,near:0.1,far:1000}}>
        {/* <OrbitControls/> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10,50,10]} angle={0.15} penumbra={1}/>
        <pointLight position={[50,50,20]}/>
        <Island 
        position={[0,-5.7,-43.4]}
        rotation={[0.1,0.67,0]}
        scale={[1,1,1]}
        setCurrentStage={setCurrentStage}
        
        />
    </Canvas>
  </div>
  </>
  )
}

export default HomePage