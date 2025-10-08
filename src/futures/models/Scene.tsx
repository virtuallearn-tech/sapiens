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

const explanation = `A célula eucarionte é uma estrutura complexa e altamente organizada, presente em organismos como animais, plantas, fungos e protozoários. Diferente das células procariontes, ela possui um núcleo verdadeiro, envolto por uma membrana, onde está armazenado o material genético. Seu interior é compartimentalizado por diversas organelas, cada uma com funções específicas: mitocôndrias produzem energia, ribossomos sintetizam proteínas, o retículo endoplasmático atua no transporte e processamento de substâncias, e o complexo golgiense organiza e distribui os produtos celulares. Essa arquitetura interna permite que a célula execute tarefas sofisticadas, essenciais para o funcionamento dos organismos multicelulares.`

const test = [
  {label: 'Mitocondria', value: 1},
  {label: 'Ribossomos', value: 2},
  {label: 'DNA', value: 3},
  {label: 'Citoesqueleto', value: 4},
]

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % carregado</Html>
}

const Scene = () => {

  // const { code } = useParams()
  const [model, setModel] = useState<IModelData | null>(null)

  useEffect(() => {
    setModel(getModel().data[0])
  }, [])

  return (
    <div className="m-scene">
      <Canvas className='m-scene__canvas' camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <axesHelper args={[5]} />
          <Model model={model!} />
        </Suspense>
      </Canvas>

      <div className="m-scene__label">
        <span>Célula Procariótica</span>
      </div>
      {/* <div className="m-scene__ui m-scene__ui--left">
        <Button 
          type='button'
          typeBtn='dark'
          className='m-button--full'
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
      </div> */}
      <div className="m-scene__ui m-scene__ui--right">
        <FabButton
          icon='volume'
          onClick={console.log}
        />
        <FabButton
          icon='letter'
          onClick={console.log}
        />
      </div>
      {/* <div className="m-scene__menuoptions"> */}
        {/* <MenuOptions items={test} onClick={console.log}/> */}
        <Explanation explanation={explanation} />
      {/* </div> */}
    </div>

  )
}

export default Scene