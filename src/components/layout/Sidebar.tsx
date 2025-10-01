import { FaHome, FaShareAlt, FaBookOpen } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { BsFillBadge3dFill  } from "react-icons/bs";


import { useSidebar } from "@store/SidebarContext";

export const Sidebar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <aside className={`m-sidebar ${isOpen ? "m-sidebar--open" : ""}`}>
      <nav className="m-sidebar__nav">
        <ul className="m-sidebar__list">
          <li className="m-sidebar__item" onClick={close}>
            <FaHome className="m-sidebar__icon" />
            <span>Home</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <BsFillBadge3dFill  className="m-sidebar__icon" />
            <span>Aprender em 3D</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <FaBookOpen className="m-sidebar__icon" />
            <span>Conteúdo</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <GiProgression className="m-sidebar__icon" />
            <span>Questões do ENEM</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <FaShareAlt className="m-sidebar__icon" />
            <span>Compartilhar</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <MdContactSupport className="m-sidebar__icon" />
            <span>Contato</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

