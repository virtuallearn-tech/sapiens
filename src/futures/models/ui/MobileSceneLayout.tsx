import { useCallback, useEffect, useState, type ReactNode } from 'react'

// actions
import { MobileActionMenu, type IActionMenuOption } from './MobileActionMenu'
import { toggleFullscreen } from '@utils/fullScreen'

// context
import { useUiScene } from '@context/UiSceneContext'

// icons
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import { SlSizeFullscreen } from 'react-icons/sl'
import { useModel } from '@context/ModelContext'
import { FabButton } from '@components/common/Fab'
import { Explanation } from '@components/ui-3d/Explanation'
import { useAudio } from '@context/AudioContext'
import { AudioActionType } from '@reducers/audio.reducer'
import { useSpeech } from '@hooks/useSpeech'
import { getModelByModule, setClass } from '@services/models/getModel'
import { ModelActionType } from '@reducers/model.reducer'
import { useAudioPlayer } from '@hooks/useAudio'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from '@routes/routesName'
import type { IModel, IModelData } from '@interfaces/model'

interface MobileSceneLayoutProps {
  children: ReactNode,
  discipline: string,
  topic: string,
  code: string
}


export const MobileSceneLayout = ({ children, discipline, topic, code }: MobileSceneLayoutProps) => {
  // UI state
  const { state: uiState, dispatch: uiDispatch } = useUiScene()
  // Model state
  const { state: modelState, dispatch: modelDispatch } = useModel()
  //Audio State
  const { state: audioState, dispatch: audioDispatch } = useAudio()

  const navigate = useNavigate()

  const handleAnimationModel = () => {
    if (!modelState.hasAnimation) return

    modelDispatch({
      type: ModelActionType.SET_ANIMATION,
      payload: !modelState.isAnimating
    })
  }

  const { speak, pause, resume, stop } = useSpeech()
  const {
    isPlaying: isPlayingAudio, play: playAudio,
    resume: resumeAudio, stop: stopAudio
  } = useAudioPlayer()

  //console.log('MODEL STATE NO LAYOUT:', modelState);


  const [menuOptions, setMenuOptions] = useState<IActionMenuOption[]>([])
  const [isShowMoreOptions, setIsShowMoreOptions] = useState<boolean>(false)

  useEffect(() => {
    //console.log('MENU STATE', modelState);

    const options: IActionMenuOption[] = []

    if (modelState.hasAnimation) {
      options.unshift({
        id: '1',
        label: !modelState.isAnimating ? 'Animar' : 'Parar animação',
        onSelect: handleAnimationModel
      })
    }

    if (modelState.sound) {
      options.push(
        {
          id: '2',
          label: !isPlayingAudio ? 'Ouvir som' : 'Parar som',
          onSelect: handleModelSound
        }
      )
    }

    options.push(
      {
        id: '3',
        label: 'Exercícios',
        onSelect: handleExercise
      })

    setMenuOptions(options)

  }, [
    modelState, isPlayingAudio, modelState.isAnimating,
    discipline, topic, code
  ])

  useEffect(() => {
      return () => {
        audioDispatch({
        type: AudioActionType.SET_STATUS,
        payload: 'idle'
      })
      stopAudio()
      }

      resetUi()
    }, [])

  const handleFullscreen = () => {
    toggleFullscreen(".m-scene")
    uiDispatch({ type: 'TOGGLE_FULLSCREEN' })
  }

  const handleToggleOptionsMenu = () => {
    uiDispatch({ type: 'TOGGLE_MENU_OPTION' })
  }

  const handleToggleExploreMenu = () => {
    uiDispatch({ type: 'TOGGLE_EXPLORE_MENU' })
  }

  const handlePlay = (text: string | string[]) => {
    speak(text, {
      onAllEnd: () => {
        audioDispatch({
          type: AudioActionType.SET_STATUS,
          payload: 'idle'
        })
      }
    })

    audioDispatch({
      type: AudioActionType.SET_STATUS,
      payload: 'playing'
    })
  }

  const handlePause = () => {
    pause()

    audioDispatch({
      type: AudioActionType.SET_STATUS,
      payload: 'paused'
    })
  }

  const handleResume = () => {
    resume()

    audioDispatch({
      type: AudioActionType.SET_STATUS,
      payload: 'playing'
    })
  }

  const handleStop = () => {
    stop()
    
    audioDispatch({
      type: AudioActionType.SET_STATUS,
      payload: 'idle'
    })
  }

  const closeAudioMenu = () => {
    handleStop()
    uiDispatch({ type: 'CLOSE_AUDIO_MENU' })
    uiDispatch({ type: 'CLOSE_EXPLANATION' })
  }

  const handleStartClass = () => {
    if (!modelState.model) return

    // 1) Gera a rotina completa
    const steps = setClass(modelState.model)

    //console.log('STEPPSSS ', steps)

    if (steps.length === 0) return

    // 2) Salva no ModelReducer
    modelDispatch({
      type: ModelActionType.SET_CLASS_TEXT,
      payload: steps
    })

    modelDispatch({
      type: ModelActionType.SET_NEXT_CLASS_STEP,
      payload: 0
    })

    // 3) Atualiza UI com o primeiro passo
    const firstStep = steps[0]
    //console.log('FIRST STEP ', firstStep)

    modelDispatch({
      type: ModelActionType.SET_TITLE,
      payload: firstStep.name
    })

    modelDispatch({
      type: ModelActionType.SET_EXPLANATION,
      payload: firstStep.text
    })

    modelDispatch({
      type: ModelActionType.SET_FOCUS_NAME,
      payload: firstStep.node
    })

    // 4) Atualiza status do áudio
    audioDispatch({
      type: AudioActionType.SET_STATUS,
      payload: 'playing'
    })

    uiDispatch({ type: 'OPEN_AUDIO_MENU' })

    // 5) Extrai apenas os textos para o speech
    const texts = steps.map(step => step.text)

    let stepIndex = 0

    speak(texts, {
      onParagraphEnd: () => {
        stepIndex++

        if (stepIndex >= steps.length) return

        const current = steps[stepIndex]

        modelDispatch({
          type: ModelActionType.SET_EXPLANATION,
          payload: current.text
        })

        // Atualiza índice no reducer
        modelDispatch({
          type: ModelActionType.SET_NEXT_CLASS_STEP,
          payload: stepIndex
        })

        // Atualiza título
        modelDispatch({
          type: ModelActionType.SET_TITLE,
          payload: current.name
        })

        // Atualiza foco do modelo
        modelDispatch({
          type: ModelActionType.SET_FOCUS_NAME,
          payload: current.node
        })
      },

      onAllEnd: () => {
        audioDispatch({
          type: AudioActionType.SET_STATUS,
          payload: 'idle'
        })

        modelDispatch({
          type: ModelActionType.SET_NEXT_CLASS_STEP,
          payload: 0
        })

        modelDispatch({
          type: ModelActionType.SET_TITLE,
          payload: modelState.title
        })

        uiDispatch({
          type: 'CLOSE_AUDIO_MENU'
        })
      }
    })
  }

  const handleModelSound = () => {
    if (modelState!.sound && !isPlayingAudio) {
      // console.log('iniciou o audio', model!.sound)
      playAudio(modelState!.sound)
    }
    else if (modelState!.sound && isPlayingAudio) {
      stopAudio()
    }
  }

  const HandleClassUI = () => {
    return (
      <div className="m-scene__audio-menu">
        {audioState.status === 'idle' && (
          <FabButton icon="play" onClick={() => handlePlay(modelState.explanation || '')} />
        )}

        {audioState.status === 'paused' && (
          <FabButton icon="play" onClick={handleResume} />
        )}

        {audioState.status === 'playing' && (
          <>
            <FabButton icon="pause" onClick={handlePause} />
            <FabButton icon="stop" onClick={handleStop} />
          </>
        )}
        {/*label de explicação*/}
        <FabButton
          icon={uiState.isShowExplanation ? "close-square" : "letter"}
          onClick={() => uiDispatch({ type: 'TOGGLE_EXPLANATION' })}
        />
        <FabButton
          icon="close"
          onClick={closeAudioMenu}
        />
      </div>
    )
  }

  const handleExercise = () => {
    resetUi()
    navigate(`${ROUTES_NAME.EXERCISES}/${discipline}/${topic}/${code}`)
  }

  const resetUi = () =>{
    uiDispatch({type: 'CLOSE_AUDIO_MENU'})
    uiDispatch({type: 'CLOSE_DETAIL_OPTION'})
    uiDispatch({type: 'CLOSE_EXPLANATION'})
    uiDispatch({type: 'CLOSE_MENU_OPTIONS'})
  }

  //UPDATE MODEL BY NEXT/PREV
  // ===============================
  // NEXT / PREVIOUS (derivado da URL)
  // ===============================

  const models: IModelData[] =
    getModelByModule(discipline as any, topic as any)?.data ?? []

  //console.log('LISTA DE MODELOS MENU ', models)

  const currentIndex = models.findIndex(
    (m) => m.topic === code
  )

  //console.log('INDEX MODELO ', currentIndex);

  const handleNext = () => {
    if (currentIndex === -1) return

    const nextIndex =
      currentIndex >= models.length - 1
        ? 0
        : currentIndex + 1

    const nextModel = models[nextIndex]

    resetBeforeChange()

    navigate(
      `${ROUTES_NAME.SCENE}/${discipline}/${topic}/${nextModel.topic}`,
      { replace: true }
    )
  }

  const handlePrevious = () => {
    if (currentIndex === -1) return

    const prevIndex =
      currentIndex <= 0
        ? models.length - 1
        : currentIndex - 1

    const prevModel = models[prevIndex]

    resetBeforeChange()

    navigate(
      `${ROUTES_NAME.SCENE}/${discipline}/${topic}/${prevModel.topic}`,
      { replace: true }
    )
  }

  const resetBeforeChange = () => {
    stopAudio()
    stop()

    modelDispatch({ type: ModelActionType.SET_ANIMATION, payload: false })
    modelDispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: null })

    audioDispatch({ type: AudioActionType.SET_STATUS, payload: 'idle' })
    uiDispatch({ type: 'CLOSE_AUDIO_MENU' })
    uiDispatch({type: 'CLOSE_EXPLANATION'})

    resetUi()
  }


  return (
    <div className="m-scene m-scene--mobile">

      {/* Canvas */}
      <div className="m-scene__canvas">
        {children}
      </div>

      {/* Topbar */}
      <div className="m-scene__topbar">
        <div className="m-scene__title">{(modelState.title ?? '').length <= 20 ? modelState.title : modelState.title?.slice(0, 17) + '...' }</div>

        <div className="m-scene__actions">
          <button
            className="m-scene__action m-scene__action--fullscreen"
            onClick={handleFullscreen}
          >
            {!uiState.isFullscreen && <SlSizeFullscreen />}
            {uiState.isFullscreen && <AiOutlineFullscreenExit />}
          </button>

          <button
            className="m-scene__action m-scene__action--options"
            onClick={handleToggleOptionsMenu}
          >
            <FaEllipsisVertical />
          </button>
        </div>
      </div>

      {/* Bottombar */}
      <div className="m-scene__bottombar">
        <div className="m-scene__actions m-scene__actions--bottom">
          <button
            className="m-scene__action m-scene__action--bottom m-scene__action--previous"
            onClick={handlePrevious}
          >
            <GrCaretPrevious />
          </button>

          <button
            className="m-scene__action m-scene__action--bottom m-scene__action--explore"
            onClick={handleToggleExploreMenu}
          >
            Explorar
          </button>

          <button className="m-scene__action m-scene__action--bottom m-scene__action--class"
            onClick={handleStartClass}
          >
            Aula
          </button>

          <button className="m-scene__action m-scene__action--bottom m-scene__action--listen"
            onClick={() => setIsShowMoreOptions((prev) => !prev)}
          >
            {/* {!modelState.sound && 'Sem áudio'}
            {modelState.sound && (!isPlayingAudio ? 'Ouvir' : 'Parar')} */}
            {!isShowMoreOptions ? 'Mais':'Fechar'}
          </button>

          <button
            className="m-scene__action m-scene__action--bottom m-scene__action--next"
            onClick={handleNext}
          >
            <GrCaretNext />
          </button>
        </div>
      </div>

      {/* Menus */}
      {uiState.isShowMenuOptions && modelState.menuOptions.length > 0 && (
        <MobileActionMenu
          type="top-right"
          options={modelState.menuOptions}
        />
      )}

      {uiState.isShowExploreMenu && modelState.exploreMenu?.length > 0 && (
        <MobileActionMenu
          type="bottom-left"
          options={modelState.exploreMenu}
        />
      )}

      {isShowMoreOptions && modelState.exploreMenu?.length > 0 && (
        <MobileActionMenu
          type="bottom-right"
          options={menuOptions}
        />
      )}

      {uiState.isShowAudioMenu && HandleClassUI()}
      {uiState.isShowExplanation && <Explanation explanation={modelState.explanation || ''} />}

    </div>
  )
}

