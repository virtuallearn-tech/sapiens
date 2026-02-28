import { FaVolumeUp, FaPause, FaStop, FaPlay, FaBook, FaInfo, FaRegWindowClose } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";




type ButtonStyle = "primary" | "secondary" | "clear" | "dark" | "outline";
type ButtonIcon = "volume" | "letter" | "stop" | "pause" | "play" | "close" | 'info' | "close-square"

interface IFabButton {
  // children: React.ReactNode,
  onClick: Function,
  icon: ButtonIcon,
  style?: ButtonStyle
}

export const FabButton = ({ onClick, icon, style = 'dark' }: IFabButton) => {

  const handleIcon = () => {
    switch (icon) {
      case 'volume':
        return <FaVolumeUp />
      case 'play':
        return <FaPlay />
      case 'stop':
        return <FaStop />
      case 'pause':
        return <FaPause />
      case 'letter':
        return <FaBook />
      case 'close':
        return <IoMdClose/>
      case 'info':
        return <FaInfo/>
      case 'close-square':
        return <FaRegWindowClose />
      default:
        return <CiMenuBurger />
    }
  }

  return <button
    className={`fab fab--ui m-button--${style}`}
    onClick={() => { onClick() }}>
    {handleIcon()}
  </button>
}