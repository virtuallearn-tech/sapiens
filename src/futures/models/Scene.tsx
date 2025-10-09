import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Suspense, useEffect, useState } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Model } from './Model'

import { useParams } from 'react-router-dom'
import type { IModelData } from '@interfaces/model'
import { getModel } from '@services/models/getModel'
import { Button } from '@components/common/Button'
import { FabButton } from '@components/common/Fab'
import { MenuOptions } from '@components/ui-3d/MenuOptions'
import { Explanation } from '@components/ui-3d/Explanation'
import { useSpeech } from '@hooks/useSpeech'


const eQue: string = `A célula é a unidade fundamental da vida e está presente em todos os seres vivos. No ENEM, compreender a diferença entre células procariontes e eucariontes pode ser decisivo. Estudar biologia com atenção ajuda a conectar teoria e prática no dia a dia.`

const test = [
  'Célula Procarionte',
  'Nucleoide',
  'Fechar'
]

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % carregado</Html>
}

const Scene = () => {

  // const { code } = useParams()
  const [model, setModel] = useState<IModelData | null>(null)

  const [titleModel, setTitleModel] = useState<string>('')
  const [textToSpeech, setTextToSpeech] = useState<string | null>(null)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [focusNames, setFocusNames] = useState<string | string[] | null>(null)

  const [showDetailOptions, setShowDetailOptions] = useState<boolean>(false)
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false)
  const [showExplanation, setShowExplanation] = useState<boolean>(false)

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
    const m = getModel().data[0]
    setModel(m)
    setTextToSpeech(m?.text!)
    setExplanation(m?.text)
    setTitleModel(m?.name)
    // handleSpeech(m?.name!)
  }, [])

  const handleModelInfo = (name: string) => {
    console.log('name', name)
    //  if(!name) return null
    if (name == model?.name || name == 'Fechar') {
      setTextToSpeech(model!.text)
      setExplanation(model!.text)
      setTitleModel(model!.name)
      setFocusNames(model!.name)
    } else 
      {
      const findText = model?.node.find((n) => n.name == name)
      console.log('find ', findText)
      if (findText) {
        setTextToSpeech(findText.text)
        setExplanation(findText.text)
        setTitleModel(findText?.name)
        setFocusNames(findText.node)
      }
    }
    setShowDetailOptions(false)
  }

  return (
    <div className="m-scene">
      <Canvas className='m-scene__canvas' camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <axesHelper args={[5]} />
          <Model model={model!} focusNames={focusNames}/>
        </Suspense>
      </Canvas>

      <div className="m-scene__label">
        <span>{titleModel}</span>
      </div>
      {!showDetailOptions && <div className="m-scene__ui m-scene__ui--left">
        <Button
          type='button'
          typeBtn='dark'
          className='m-button--full'
          onClick={() => setShowDetailOptions(prev => !prev)}
        >
          Detalhes
        </Button>
        <Button
          type='button'
          typeBtn='dark'
          className='m-button--full'
        >
          Menu
        </Button>
      </div>}
      
      <div className="m-scene__ui m-scene__ui--right">
        {!isSpeaking && <FabButton
          icon='volume'
          onClick={() => speak(textToSpeech!)}
        />}
        {!isPaused && isSpeaking && <FabButton
          icon='pause'
          onClick={pause}
        />}
        {isPaused && <FabButton
          icon='play'
          onClick={resume}
        />}
        {isSpeaking && <FabButton
          icon='stop'
          onClick={() => { stop() }}
        />}
        <FabButton
          icon={showExplanation ? 'close' : 'letter'}
          onClick={() => { setShowExplanation((prev) => !prev) }}
        />
      </div>

      {showDetailOptions && <MenuOptions items={test} onClick={handleModelInfo} />}
      {showExplanation && <Explanation explanation={explanation!} />}

    </div>

  )
}

export default Scene