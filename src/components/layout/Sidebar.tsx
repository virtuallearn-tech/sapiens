import { Link } from 'react-router-dom'
import { FaHome, FaShareAlt, FaBookOpen } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { BsFillBadge3dFill } from "react-icons/bs";

import { useSidebar } from "@store/SidebarContext";

export const Sidebar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <aside className={`m-sidebar ${isOpen ? "m-sidebar--open" : ""}`}>
      <nav className="m-sidebar__nav">
        <ul className="m-sidebar__list">
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <FaHome className="m-sidebar__icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <BsFillBadge3dFill className="m-sidebar__icon" />
              <span>Aprender em 3D</span>
            </Link>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <FaBookOpen className="m-sidebar__icon" />
              <span>Conteúdo</span>
            </Link>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <GiProgression className="m-sidebar__icon" />
              <span>Questões do ENEM</span>
            </Link>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <FaShareAlt className="m-sidebar__icon" />
              <span>Compartilhar</span>
            </Link>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <Link to="">
              <MdContactSupport className="m-sidebar__icon" />
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

