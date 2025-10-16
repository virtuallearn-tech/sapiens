import type { IModelData } from "@interfaces/model"
import { useGLTF } from "@react-three/drei"
import { resetTransverseModel, transverseModel } from "@utils/modifyModel"
// import { useControls } from "leva"
import { useEffect, useState } from "react"

interface IPlotModel {
  model: IModelData,
  focusNames: string | string[] | null,
  updateScale: boolean | null
}

export const Model = ({ model, focusNames, updateScale }: IPlotModel) => {
  // Controles de transformação + foco
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scale, setScale] = useState<number>(1)

  const { scene } = useGLTF(model.source)
  // //console.log('scene', scene)

  // const { scale, posX, posY, posZ, rotX, rotY, rotZ } = useControls("Transformações", {
  //   scale: { value: 0.0045, min: 0.001, max: 25, step: 0.1 },
  //   posX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   posY: { value: 0.5, min: -10, max: 10, step: 0.1 },
  //   posZ: { value: 0, min: -10, max: 10, step: 0.1 },
  //   rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  // });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    //console.log("Atualizando scale para width:", width);
    handleUpdateScale()
  }, [width, updateScale]);


  // useEffect(()=>{
  //   if(updateScale) handleUpdateScale()
  // }, [updateScale])

  useEffect(() => {

    if (focusNames == 'Fechar' || focusNames == model.name || focusNames == null) {
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

  const handleUpdateScale = () => {
    if (width < 640) {
      setScale(model.scale);
    } else if (width < 768) {
      setScale(model.scale_sm);
    } else if (width < 1024) {
      setScale(model.scale_md);
    } else if (width < 1280) {
      setScale(model.scale_lg);
    } else {//if (width < 1536)
      setScale(model.scale_2lg);
    }
  }

  return (
    // <group scale={scale} position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]}>
    //   <primitive object={scene}/>
    // </group>
    <group scale={scale} position={model.position} rotation={model.rotation}>
      <primitive object={scene} />
    </group>
  )
}