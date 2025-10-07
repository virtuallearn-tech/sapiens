import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

import { Suspense, useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { useControls } from 'leva'

import * as THREE from 'three'

// function Cell() {

//   const { scale, posX, posY, posZ, rotX, rotY, rotZ } = useControls({
//     scale: { value: 16, min: 0.1, max: 50, step: 0.1 },

//     posX: { value: 0, min: -10, max: 10, step: 0.1 },
//     posY: { value: 0, min: -10, max: 10, step: 0.1 },
//     posZ: { value: 0, min: -10, max: 10, step: 0.1 },

//     rotX: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//     rotY: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//     rotZ: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 }
//   })

//   const { scene } = useGLTF('/models/archaea.glb')
//   console.log('scene ', scene)

//   useEffect(() => {
//     scene.traverse((child:any) => {
//       if (child.isMesh) {
//         // Se for a organela desejada
//         if (child.name === 'Box001_tt_0') {
//           child.visible = true
//           if (child.material) {
//             child.material.transparent = true
//             child.material.opacity = 1
//           }
//         } else {
//           // Deixa os outros transparentes
//           if (child.material) {
//             child.material.transparent = true
//             child.material.opacity = 0.1
//           }
//         }
//       }
//     })
//   }, [scene])

//   return (
//     <primitive
//       object={scene}
//       scale={scale}
//       position={[posX, posY, posZ]}
//       rotation={[rotX, rotY, rotZ]}
//     />
//   )
// }

function Cell() {
  // Controles de transformação + foco
  const { scale, posX, posY, posZ, rotX, rotY, rotZ, focusName, opacityOthers, usePath } = useControls({
    scale: { value: 16, min: 0.1, max: 50, step: 0.1 },

    posX: { value: 0, min: -10, max: 10, step: 0.1 },
    posY: { value: 0, min: -10, max: 10, step: 0.1 },
    posZ: { value: 0, min: -10, max: 10, step: 0.1 },

    rotX: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    rotY: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    rotZ: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },

    // Nome simples ou caminho completo: "Box001_tt_0" ou "Box001/Object_4/Box001_tt_0"
    focusName: { value: 'Line030_tt_0' },
    usePath: { value: false }, // true se quiser selecionar por caminho
    opacityOthers: { value: 0.12, min: 0, max: 1, step: 0.01 }
  })

  const { scene } = useGLTF('/models/archaea.glb')

  // Helper: selecionar por caminho (ex.: "Box001/Object_4/Box001_tt_0")
  const getByPath = (root: any, path: string) => {
    const segments = path.split('/').filter(Boolean)
    let current = root
    for (const seg of segments) {
      current = current?.children?.find((c: any) => c.name === seg)
      if (!current) return null
    }
    return current
  }

  // Helper: clonar e ajustar opacidade de materiais (suporta multi-materiais)
  const setOpacity = (mesh: any, opacity: number) => {
    const apply = (mat: any) => {
      if (!mat) return mat
      const cloned = mat.isMaterial ? mat.clone() : mat
      cloned.transparent = opacity < 1
      cloned.opacity = opacity

      return cloned
    }
    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map(apply)
    } else {
      mesh.material = apply(mesh.material)
    }
  }

  useEffect(() => {
    // Seleciona alvo por nome simples ou por caminho
    const target = usePath ? getByPath(scene, focusName) : scene.getObjectByName(focusName)

    if (!target) {
      console.warn(`Alvo não encontrado: ${focusName}. Listando meshes:`)
      scene.traverse((child: any) => child.isMesh && console.log(child.name))
    }

    // Aplica foco: alvo opaco, outros transparentes

    const focusNames: string | string[] = ['Box013_tt_0', 'Box014_tt_0', 'Line031_tt_0'];

    const namesArray = Array.isArray(focusNames)
      ? focusNames
      : (focusNames as string).split(',').map((n) => n.trim())

    // const focusSet = new Set(focusNames)
    const focusSet = new Set(namesArray)

    scene.traverse((child: any) => {
      if (!child.isMesh) return
      const isTarget = target ? child === target || child.uuid === target.uuid : child.name === focusName

      if (focusSet.has(child.name)) {
        child.visible = true
        setOpacity(child, 1)

        // 🔥 Aqui entra o brilho
        if (child.material) {
          // clone para não afetar materiais compartilhados
          const mat = child.material.clone()
          mat.emissive = new THREE.Color('#ff4444') // cor do brilho
          mat.emissiveIntensity = 1               // intensidade suave
          child.material = mat
        }

      }

      // if (isTarget) {
      //   child.visible = true
      //   setOpacity(child, 1)

      //   // 🔥 Aqui entra o brilho
      //   if (child.material) {
      //     // clone para não afetar materiais compartilhados
      //     const mat = child.material.clone()
      //     mat.emissive = new THREE.Color('#ff4444') // cor do brilho
      //     mat.emissiveIntensity = 0.8               // intensidade suave
      //     child.material = mat
      //   }

      // } 
      else {
        child.visible = true
        setOpacity(child, opacityOthers)
      }
    })
  }, [scene, focusName, opacityOthers, usePath])

  return (
    <group scale={scale} position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]}>
      <primitive object={scene} />
    </group>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % carregado</Html>
}

const Scene = () => {

  // const { scene } = useThree()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls />
      <Suspense fallback={<Loader />}>
        <axesHelper args={[5]} />
        <Cell />
        {/* <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
      </Suspense>
    </Canvas>
  )
}

export default Scene