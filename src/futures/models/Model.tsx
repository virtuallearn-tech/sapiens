import type { IModelData } from "@interfaces/model"
import { useGLTF, useAnimations } from "@react-three/drei"
import { hasFocusMatch, resetTransverseModel, transverseModel } from "@utils/modifyModel"
// import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"

import * as THREE from 'three';

interface IPlotModel {
  model: IModelData,
  focusNames: string | string[] | null,
  updateScale: boolean | null,
  isAnimating: boolean
}

const Model = ({ model, focusNames, updateScale, isAnimating }: IPlotModel) => {
  // Controles de transformação + foco
  const group = useRef(null)

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scaleModel, setScale] = useState<number>(1)

  const { scene, animations } = useGLTF(model.source)
  console.log('Model on scene', scene)
  // console.log('animations ', animations)

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    //console.log("Atualizando scale para width:", width);
    handleUpdateScale()
  }, [width, updateScale]);

  /*useEffect(() => {

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

  }, [scene, focusNames])*/

  useEffect(() => {

    if (
      focusNames == 'Fechar' ||
      focusNames == model.name ||
      focusNames == null
    ) {
      resetTransverseModel(scene)
      return
    }

    const namesArray = Array.isArray(focusNames)
      ? focusNames
      : (focusNames as string).split(',').map(n => n.trim())

    const focusSet = new Set(namesArray)

    // 🔴 NOVA VALIDAÇÃO
    const hasMatch = hasFocusMatch(scene, focusSet)

    if (!hasMatch) {
      // Não existe correspondência → não aplicar efeito
      resetTransverseModel(scene)
      return
    }

    // Só aplica se existir match
    transverseModel(scene, focusSet)

  }, [scene, focusNames])

  useEffect(() => {
    handlePlayAnimation()
  }, [actions, animations, isAnimating])

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); // move o modelo para que o centro fique em (0,0,0)
  }, [scene]);



  const handlePlayAnimation = () => {
    if (animations.length > 0 && actions) {
      const selected =
        model.animation && actions[model.animation]
          ? actions[model.animation]
          : Object.values(actions)[0];
      // console.log('selected animation', selected);
      if (isAnimating) {
        selected?.reset().fadeIn(0.5).play();
      } else {
        selected?.fadeOut(0.5).stop();
      }
    }
  };

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
    <group scale={scaleModel} position={model.position} rotation={model.rotation}>
      <primitive object={scene} ref={group} />
    </group>
  )
}

export default Model
