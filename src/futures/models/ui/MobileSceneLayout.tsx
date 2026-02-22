import { useEffect, useState, type ReactNode } from 'react'

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

interface MobileSceneLayoutProps {
  children: ReactNode,
}

export const MobileSceneLayout = ({ children }: MobileSceneLayoutProps) => {
  // UI state
  const { state: uiState, dispatch: uiDispatch } = useUiScene()
  // Model state
  const { state: modelState, dispatch: modelDispatch } = useModel()
  //Audio State
  const { state: audioState, dispatch: audioDispatch } = useAudio()

  const { speak, pause, resume, stop } = useSpeech()

  console.log('MODEL STATE NO LAYOUT:', modelState);

  useEffect(() => {
    console.log('MENU MOUNT');

    return () => {
      console.log('MENU UNMOUNT');
    };
  }, []);

  useEffect(() => {
    console.log('MENU STATE', modelState);
  }, [modelState]);


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
          icon={!modelState.explanation ? "close" : "letter"}
          onClick={() => uiDispatch({ type: 'TOGGLE_EXPLANATION' })}
        />
        <FabButton
          icon="close"
          onClick={closeAudioMenu}
        />
      </div>
    )
  }

  return (
    <div className="m-scene m-scene--mobile">

      {/* Canvas */}
      <div className="m-scene__canvas">
        {children}
      </div>

      {/* Topbar */}
      <div className="m-scene__topbar">
        <div className="m-scene__title">{modelState.title}</div>

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
          <button className="m-scene__action m-scene__action--bottom m-scene__action--previous">
            <GrCaretPrevious />
          </button>

          <button
            className="m-scene__action m-scene__action--bottom m-scene__action--explore"
            onClick={handleToggleExploreMenu}
          >
            Explorar
          </button>

          <button className="m-scene__action m-scene__action--bottom m-scene__action--class">
            Aula
          </button>

          <button className="m-scene__action m-scene__action--bottom m-scene__action--listen">
            Ouvir
          </button>

          <button className="m-scene__action m-scene__action--bottom m-scene__action--next">
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

      {uiState.isShowAudioMenu && HandleClassUI()}
      {uiState.isShowExplanation && <Explanation explanation={modelState.explanation || ''} />}

    </div>
  )
}

