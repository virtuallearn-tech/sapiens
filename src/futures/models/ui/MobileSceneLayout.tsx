import { useState, type ReactNode } from 'react'

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

interface MobileSceneLayoutProps {
  children: ReactNode,
}

export const MobileSceneLayout = ({ children }: MobileSceneLayoutProps) => {
  // UI state
  const { state: uiState, dispatch: uiDispatch } = useUiScene()

  // Model state
  const { state: modelState, dispatch: modelDispatch } = useModel()

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
    </div>
  )
}




/*import { useState, type ReactNode } from 'react'

//actions
import { MobileActionMenu, type IActionMenuOption } from './MobileActionMenu'
import type { IModelData } from '@interfaces/model'
import { toggleFullscreen } from '@utils/fullScreen'

//reducers
import { useUiScene } from '@context/UiSceneContext'

//icons
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import { SlSizeFullscreen } from 'react-icons/sl'

interface MobileSceneLayoutProps {
    children: ReactNode,
    model?: IModelData,
    optionsMenu?: IActionMenuOption[],
    exploreMenu?: IActionMenuOption[],
    //fullscreem?: () => void
}


export const MobileSceneLayout = ({
    children,
    model,
    optionsMenu,
    exploreMenu
}: MobileSceneLayoutProps) => {
    

    const { state, dispatch } = useUiScene()

    console.log('UI state', state)

    const handleFullscreen = () => {
        toggleFullscreen(".m-scene")
        //setIsFullscreen(prev => !prev)
        dispatch({ type: 'TOGGLE_FULLSCREEN' })
    }

    const handleToggleOptionsMenu = () => {
        console.log('TOGGLE_MENU_OPTION')
        dispatch({ type: 'TOGGLE_MENU_OPTION' })
    }
    const handleToggleExploreMenu = () => {
        dispatch({type: 'TOGGLE_EXPLORE_MENU'})
    }

    return (
        <div className="m-scene m-scene--mobile">

            <div className="m-scene__canvas">
                {children}
            </div>

            <div className="m-scene__topbar">
                <div className="m-scene__title">{model?.name}</div>

                <div className="m-scene__actions">
                    <button
                        className="m-scene__action m-scene__action--fullscreen"
                        onClick={handleFullscreen}
                    >
                        {!state.isFullscreen && <SlSizeFullscreen />}
                        {state.isFullscreen && <AiOutlineFullscreenExit />}

                    </button>

                    <button
                        className="m-scene__action m-scene__action--options"
                        onClick={handleToggleOptionsMenu}
                    >
                        <FaEllipsisVertical />
                    </button>
                </div>
            </div>

            <div className="m-scene__bottombar">

                <div className="m-scene__actions m-scene__actions--bottom">

                    <button className=" m-scene__action m-scene__action--bottom m-scene__action--previous">
                        <GrCaretPrevious />
                    </button>

                    <button className="m-scene__action m-scene__action--bottom m-scene__action--explore"
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

            {state.isShowMenuOptions&& optionsMenu && (
                <MobileActionMenu
                    type="top-right"
                    options={optionsMenu}
                />
            )}

            {state.isShowExploreMenu && exploreMenu && (
                <MobileActionMenu
                    type="bottom-left"
                    options={exploreMenu}
                />
            )}


        </div>

    )
}*/