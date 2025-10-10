import type { IModelData } from "@interfaces/model"
import { useGLTF } from "@react-three/drei"
import { resetTransverseModel, transverseModel } from "@utils/modifyModel"
import { useControls } from "leva"
import { useEffect } from "react"

interface IPlotModel {
  model: IModelData,
  focusNames: string | string[] | null
}

export const Model = ({ model, focusNames }: IPlotModel) => {
  // Controles de transformação + foco

  console.log('model ', model, focusNames)


  const { scene } = useGLTF(model.source)
  console.log('scene', scene)

  useEffect(() => {
  
    if(focusNames == 'Fechar' || focusNames == model.name || focusNames == null)
    {
      resetTransverseModel(scene)
    }
    else if (focusNames !== null) {
      const namesArray = Array.isArray(focusNames)
        ? focusNames
        : (focusNames as string).split(',').map((n) => n.trim())

      // const focusSet = new Set(focusNames)
      const focusSet = new Set(namesArray)

      transverseModel(
        scene,
        // model.node,
        focusSet,
      )
    }

  }, [scene, focusNames])

  return (
    // <group scale={scale} position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]}>
    //   <primitive object={scene}/>
    // </group>
    <group scale={model.scale} position={model.position} rotation={model.rotation}>
      <primitive object={scene} />
    </group>
  )
}