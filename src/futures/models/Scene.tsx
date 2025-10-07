import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Suspense, useEffect, useState } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Model } from './Model'

import { useParams } from 'react-router-dom'
import type { IModelData } from '@interfaces/model'
import { getModel } from '@services/models/getModel'


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % carregado</Html>
}

const Scene = () => {

  // const { code } = useParams()
  const [model, setModel] = useState<IModelData|null>(null)
  
  useEffect(()=>{
    setModel(getModel().data[0])
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls />
      <Suspense fallback={<Loader />}>
        <axesHelper args={[5]} />
        <Model model={model!} />
         {/* <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
         <meshStandardMaterial color="red" />
       </mesh> */}
      </Suspense>
    </Canvas>
  )
}

export default Scene