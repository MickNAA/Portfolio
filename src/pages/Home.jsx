import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../component/Loader'
import { OrbitControls } from '@react-three/drei'

import Island from '../models/island'
import Sky from '../models/sky'
import Plane from '../models/plane'
import Bird from '../models/birds'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIsland = () =>{
    let screenScale = null 
    let screenPosition =[0,-6.5,-43]
    let rotation =[0.1,4.7,0]

    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
      screenPosition =[0,-6.5,-43]
    } else {
      screenScale = [1, 1, 1];
      screenPosition =[0,-6.5,-43]
    }

    return [screenPosition,screenScale,rotation]
  }

  const adjustPlane = () =>{
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5];
      screenPosition =[0,-1.5,0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition =[0,-4,-4]
    }

    return [screenPosition,screenScale]
  }
  const [islandPosition, islandScale, islandRotation] = adjustIsland()
  const [planeScale, planePosition] = adjustPlane()

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
        gl={{ alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.1} />
          <hemisphereLight skyColor='#b1e1f' groundColor='#000000' intensity={1}/>
          <Bird />
          <Sky />
          <Plane 
          planeScale={planeScale}
          planePosition={planePosition}
          isRotating={isRotating}
          rotation={[0,20,0]}/>
          <Island 
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home