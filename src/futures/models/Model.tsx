import type { IModelData } from "@interfaces/model"
import { useGLTF } from "@react-three/drei"
import { getByPath, resetTransverseModel, transverseModel } from "@utils/modifyModel"
import { useControls } from "leva"
import { useEffect } from "react"

interface IPlotModel {
  model: IModelData,
  focusNames: string | string[] | null
}

export const Model = ({ model, focusNames }: IPlotModel) => {
  // Controles de transformação + foco

  console.log('model ', model)

  // const { scale, posX, posY, posZ, rotX, rotY, rotZ } = useControls({
  //   scale: { value: 16, min: 0.1, max: 50, step: 0.1 },

  //   posX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   posY: { value: 0, min: -10, max: 10, step: 0.1 },
  //   posZ: { value: 0, min: -10, max: 10, step: 0.1 },

  //   rotX: { value: 1.57, min: -3.14, max: Math.PI * 2, step: 0.01 },
  //   rotY: { value: 0, min: -3.14, max: Math.PI * 2, step: 0.01 },
  //   rotZ: { value: 0, min: -3.14, max: Math.PI * 2, step: 0.01 },

  //   // Nome simples ou caminho completo: "Box001_tt_0" ou "Box001/Object_4/Box001_tt_0"
  //   // focusName: { value: model.node[0] },
  //   // usePath: { value: false }, // true se quiser selecionar por caminho
  //   // opacityOthers: { value: 0.05, min: 0, max: 1, step: 0.01 }  
  // })

  const { scene } = useGLTF(model.source)
  console.log('scene', scene)


  useEffect(() => {
    // Seleciona alvo por nome simples ou por caminho

    // const target = usePath ? getByPath(scene, focusName) : scene.getObjectByName(focusName)

    // if (!target) {
    //   console.warn(`Alvo não encontrado: ${focusName}. Listando meshes:`)
    //   scene.traverse((child: any) => child.isMesh && console.log(child.name))
    // }

    // Aplica foco: alvo opaco, outros transparentes

    // const focusNames: string | string[] = model.node.map((n: any) => n.node)
    //['Box013_tt_0', 'Box014_tt_0', 'Line031_tt_0'];
    // 'Box001_tt_0'
    //['Box013_tt_0', 'Box014_tt_0', 'Line031_tt_0'];
    if(focusNames == 'Fechar' || focusNames == model.name)
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

  }, [model, focusNames])

  return (
    // <group scale={scale} position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]}>
    //   <primitive object={scene}/>
    // </group>
    <group scale={model.scale} position={model.position} rotation={model.rotation}>
      <primitive object={scene} />
    </group>
  )
}