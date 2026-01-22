import type { ReactNode } from 'react'
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import { SlSizeFullscreen } from 'react-icons/sl'
import { MobileActionMenu, type IActionMenuOption } from './MobileActionMenu'

interface MobileSceneLayoutProps {
    children: ReactNode
}
const optionsMenu: IActionMenuOption[] = [
    {
        id: 'info',
        label: 'Informações do modelo',
        onSelect: () => console.log('Info')
    },
    {
        id: 'reset',
        label: 'Resetar posição',
        onSelect: () => console.log('Reset')
    }
]



export const MobileSceneLayout = ({ children }: MobileSceneLayoutProps) => {
    return (
        <div className="m-scene m-scene--mobile">

            <div className="m-scene__canvas">
                {children}
            </div>

            <div className="m-scene__topbar">
                <div className="m-scene__title">Nome do Modelo</div>

                <div className="m-scene__actions">
                    <button className="m-scene__action m-scene__action--fullscreen">
                        <SlSizeFullscreen />
                    </button>

                    <button className="m-scene__action m-scene__action--options">
                        <FaEllipsisVertical />
                    </button>
                </div>
            </div>

            <div className="m-scene__bottombar">

                <div className="m-scene__actions m-scene__actions--bottom">

                    <button className=" m-scene__action m-scene__action--bottom m-scene__action--previous">
                        <GrCaretPrevious />
                    </button>

                    <button className="m-scene__action m-scene__action--bottom m-scene__action--explore">
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

            {true && (
                <MobileActionMenu
                    type="top-right"
                    options={optionsMenu}
                />
            )}


        </div>

    )
}