import type React from "react"

import { FaVolumeUp } from "react-icons/fa";
import { LuLetterText } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";


type ButtonStyle = "primary" | "secondary" | "clear" | "dark" | "outline";
type ButtonIcon = "volume" | "letter"

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
      case 'letter':
        return <LuLetterText />
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