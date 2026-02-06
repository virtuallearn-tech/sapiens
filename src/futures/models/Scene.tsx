import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Html, useProgress } from '@react-three/drei'
// import { Model } from './Model'
const Model = React.lazy(() => import("./Model"));

import { useParams, useNavigate } from 'react-router-dom'
import type { IClass, IModelData } from '@interfaces/model'
import { getModelByTopic, setClass } from '@services/models/getModel'
import { Button } from '@components/common/Button'
import { FabButton } from '@components/common/Fab'
import { MenuOptions } from '@components/ui-3d/MenuOptions'
import { Explanation } from '@components/ui-3d/Explanation'
import { useSpeech } from '@hooks/useSpeech'
import { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from '@interfaces/discipline'
import { License } from '@components/layout/License'

import { BsArrowsFullscreen } from "react-icons/bs";
import { RiFullscreenExitFill } from "react-icons/ri";
import { toggleFullscreen } from '@utils/fullScreen'
import { useAudioPlayer } from '@hooks/useAudio'
import { ROUTES_NAME } from '@routes/routesName'
import { MobileSceneLayout } from './ui/MobileSceneLayout';
import type { IActionMenuOption } from './ui/MobileActionMenu';
import { label } from 'three/tsl';

const defaultBgColor: string = '#CCCCCC'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "6px 12px",
          borderRadius: "8px",
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          display: "inline-block",
          whiteSpace: "nowrap"
        }}
      >
        {progress.toFixed(0)}% carregado
      </div>
    </Html>
  )
}

const Scene = () => {

  const navigate = useNavigate()
  const { discipline, topic, code } = useParams()
  //console.log(discipline, topic, code)

  const { isPlaying: isPlayingAudio, play: playAudio, resume: resumeAudio, stop: stopAudio } = useAudioPlayer();

  const [bg, setBg] = useState(defaultBgColor)

  const [model, setModel] = useState<IModelData | null>(null)
  const [updateScale, setUpdateScale] = useState<boolean>(false)

  const [titleModel, setTitleModel] = useState<string>('')
  const [textToSpeech, setTextToSpeech] = useState<string | null>(null)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [focusNames, setFocusNames] = useState<string | string[] | null>(null)

  const [menuOptions, setMenuOptions] = useState<IActionMenuOption[]>([])

  //remove
  const [showDetailOptions, setShowDetailOptions] = useState<boolean>(false)
  const [showExplanation, setShowExplanation] = useState<boolean>(false)


  //routine to class the content
  const [classRoutine, setClassRoutine] = useState<IClass[]>([])
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isClassActive, setIsClassActive] = useState(false)
  const [isClassPaused, setIsClassPaused] = useState(false)

  const [license, setLicense] = useState<boolean>(false)
  // const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  //hooks to handle audios from audio
  const [isPlayigAudio, setIsPlayingAudio] = useState<boolean>(false)

  //handlle animation
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [hasAnimation, setHasAnimation] = useState<boolean>(false)

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const {
    isSupported,
    isSpeaking,
    isPaused,
    pause,
    resume,
    stop,
    speak,
  } = useSpeech()


  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  /*useEffect(() => {

    if (!isOnline) return;

    const m = getModelByTopic(
      code as typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS],
      discipline as typeof DISCIPLINE[keyof typeof DISCIPLINE],
      topic as typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE]) //getModel().data[0]
    //console.log('MODEL ', m)
    setModel(m)
    const nodesNames = m?.node?.map(n => n.name).filter((s): s is string => typeof s === 'string') ?? []

    const menuOptions = [m?.name, ...nodesNames, 'Fechar']
      .filter((s): s is string => typeof s === 'string')
    const t = menuOptions.map((d, index) => { return { label: d, onSelect: () => handleModelInfo(d), id: `${index + 1}` } })
    console.log('T ', t);
    setMenuOptions(t)

    
    setTextToSpeech(m?.text ?? null)
    setExplanation(m?.text ?? null)
    setTitleModel(m?.name ?? '')

    const iClass = setClass(m!)

    if (m.sceneBg) {
      setBg(m.sceneBg)
    }

    if (m.hasAnimation) {
      setHasAnimation(true)
      setIsAnimating(true)
    }

    //console.log('iClass', iClass)
    // handleSpeech(m?.name!)
  }, [isOnline])*/

  useEffect(() => {
    if (!isOnline) return;

    const m = getModelByTopic(
      code as typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS],
      discipline as typeof DISCIPLINE[keyof typeof DISCIPLINE],
      topic as typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE]
    );

    setModel(m);

    setTextToSpeech(m?.text ?? null);
    setExplanation(m?.text ?? null);
    setTitleModel(m?.name ?? '');

    if (m?.sceneBg) setBg(m.sceneBg);

    if (m?.hasAnimation) {
      setHasAnimation(true);
      setIsAnimating(true);
    }
  }, [isOnline, code, discipline, topic]);

  useEffect(() => {
    if (!model) return;

    const nodesNames =
      model.node?.map(n => n.name).filter((s): s is string => typeof s === 'string') ?? [];

    const labels = [model.name, ...nodesNames, 'Fechar'];

    const t = labels.map((d, index) => ({
      label: d,
      id: `${index + 1}`,
      onSelect: () => handleModelInfo(d)
    }));

    setMenuOptions(t);
  }, [model]);


  useEffect(() => {
    if (!isClassActive || isClassPaused) return
    if (classRoutine.length === 0 || currentStep >= classRoutine.length) {
      // {
      setFocusNames(null)
      setIsClassActive(false)
      return
      // }
    }

    const current = classRoutine[currentStep]

    setTitleModel(current.name)
    setExplanation(current.text)
    setFocusNames(current.node)
    setTextToSpeech(current.text)

    speak(current.text, {
      onAllEnd: () => {
        if (!isClassPaused) {
          setCurrentStep((prev) => prev + 1)
        }
      }
    })
  }, [currentStep, classRoutine, isClassActive, isClassPaused])

  useEffect(() => {
    // Só roda no unmount
    return () => {
      // if (isSpeaking) {
      stop();
      stopAudio()
      // }
    }
  }, [])

  const handleUpdateScale = () => {
    if (!updateScale) {
      setUpdateScale(true)
      setTimeout(() => { setUpdateScale(false) }, 1000)
    }
  }

  const handleModelInfo = useCallback((name: string) => {
    if (!model) return;

    if (name === model.name || name === 'Fechar') {
      setTextToSpeech(model.text);
      setExplanation(model.text);
      setTitleModel(model.name);
      setFocusNames(model.name);
    } else {
      const findText = model.node?.find(n => n.name === name);
      if (findText) {
        setTextToSpeech(findText.text);
        setExplanation(findText.text);
        setTitleModel(findText.name);
        setFocusNames(findText.node);
      }
    }

    setShowDetailOptions(false);
  }, [model]);


  // const handleModelInfo = (name: string) => {
  //   console.log('model t ', model);
  //   console.log('name', name, model?.name)
  //   //  if(!name) return null
  //   if (name == model?.name || name == 'Fechar') {
  //     console.log('entrou if')
  //     setTextToSpeech(model!.text)
  //     setExplanation(model!.text)
  //     setTitleModel(model!.name)
  //     setFocusNames(model!.name)
  //   } else {
  //     const findText = model?.node!.find((n) => n.name == name)
  //     console.log('entrou else find ', findText)
  //     if (findText) {
  //       setTextToSpeech(findText.text)
  //       setExplanation(findText.text)
  //       setTitleModel(findText?.name)
  //       setFocusNames(findText.node)
  //     }
  //   }
  //   setShowDetailOptions(false)
  // }

  const startClassRoutine = () => {
    if (!model) return
    if (isPlayigAudio) {
      stopAudio()
      setIsPlayingAudio(false)
    }
    const routine = setClass(model)
    setClassRoutine(routine)
    setCurrentStep(0)
    setIsClassActive(true)
    setIsClassPaused(false)
  }

  const handlePauseClass = () => {
    pause() // pausa o áudio
    setIsClassPaused(true)
  }

  const handleResumeClass = () => {
    if (isPlayigAudio) {
      stopAudio()
      setIsPlayingAudio(false)
    }
    resume() // retoma o áudio
    setIsClassPaused(false)
  }

  const handleStopClass = () => {
    stop() // para o áudio
    setIsClassActive(false)
    setIsClassPaused(false)
    setCurrentStep(0)
    setClassRoutine([])
    setFocusNames(null)
  }

  const handleFreeUI = () => {
    return (
      <>
        {!isSpeaking && (
          <FabButton icon="volume" onClick={() => { stopAudio(); setIsPlayingAudio(false); speak(textToSpeech!) }} />
        )}

        {isSpeaking && !isPaused && (
          <FabButton icon="pause" onClick={pause} />
        )}

        {isPaused && (
          <FabButton icon="play" onClick={resume} />
        )}

        {isSpeaking && (
          <FabButton icon="stop" onClick={stop} />
        )}
      </>
    )
  }

  const handleClassUI = () => {
    return (
      <>
        {/* Aula pausada → botão para retomar */}
        {isClassPaused && (
          <FabButton icon="play" onClick={handleResumeClass} />
        )}

        {/* Aula em andamento → botão para pausar */}
        {!isClassPaused && isSpeaking && (
          <FabButton icon="pause" onClick={handlePauseClass} />
        )}

        {/* Aula em andamento → botão para parar */}
        {!isClassPaused && isSpeaking && (
          <FabButton icon="stop" onClick={handleStopClass} />
        )}
      </>
    )
  }


  const handleModelAudio = () => {
    if (model!.sound && !isPlayigAudio) {
      // console.log('iniciou o audio', model!.sound)
      playAudio(model!.sound)
      setIsPlayingAudio(true)
    }
    else if (model!.sound && isPlayigAudio) {
      stopAudio()
      setIsPlayingAudio(false)
    }
  }


  const SceneCanvas = () => {
    return (
      <Canvas className='m-scene__canvas' camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls maxDistance={10} />
        <color attach="background" args={[bg]} />
        <Suspense fallback={<Loader />}>
          {/* <axesHelper args={[5]} /> */}
          <Model model={model!} focusNames={focusNames} updateScale={updateScale} isAnimating={isAnimating} />
        </Suspense>
      </Canvas>
    )
  }

  if (!isOnline) {
    return (
      <div className="m-scene__offline">
        <h2>Conexão necessária</h2>
        <p>Você precisa estar online para acessar os modelos 3D.</p>
      </div>
    );
  }

  const handleLicense = () => setLicense((prev) => !prev)

  const optionsMenu: IActionMenuOption[] = [
    {
      id: 'info',
      label: 'Informações do modelo',
      onSelect: handleLicense
    },
    {
      id: 'reset',
      label: 'Resetar posição',
      onSelect: handleUpdateScale
    }
  ]

  return (
    <>
      <MobileSceneLayout
        model={model!}
        optionsMenu={optionsMenu}
        exploreMenu={menuOptions}
      >
        <SceneCanvas />
      </MobileSceneLayout>
      {license && <License content={model?.attribuition!} />}
    </>

  )

}

export default Scene