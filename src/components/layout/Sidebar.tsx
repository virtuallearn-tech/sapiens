import { Link } from 'react-router-dom'
import { FaHome, FaShareAlt, FaBookOpen, FaHeart } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { BsFillBadge3dFill, BsFillPencilFill } from "react-icons/bs";
import { PiExam } from "react-icons/pi";


import { useSidebar } from "@store/SidebarContext";

export const Sidebar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <aside className={`m-sidebar ${isOpen ? "m-sidebar--open" : ""}`}>
      <nav className="m-sidebar__nav">
        <ul className="m-sidebar__list">
          <li onClick={close}>
            <Link to="" className="m-sidebar__item">
              <FaHome className="m-sidebar__icon" />
              <span>Home</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/learn-3d" className="m-sidebar__item">
              <BsFillBadge3dFill className="m-sidebar__icon" />
              <span>Aprender em 3D</span>
            </Link>
          </li>
          {/* <li onClick={close}>
            <Link to="/summary-list" className="m-sidebar__item">
              <FaBookOpen className="m-sidebar__icon" />
              <span>Conteúdo</span>
            </Link>
          </li> */}
          {/* <li onClick={close}>
            <Link to="/enem" className="m-sidebar__item">
              <BsFillPencilFill className="m-sidebar__icon" />
              <span>Questões do ENEM</span>
            </Link>
          </li> */}
          <li onClick={close}>
            <Link to="/share-app" className="m-sidebar__item">
              <FaShareAlt className="m-sidebar__icon" />
              <span>Compartilhar</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/contact" className="m-sidebar__item">
              <MdContactSupport className="m-sidebar__icon" />
              <span>Contato</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/donate" className="m-sidebar__item">
              <FaHeart className="m-sidebar__icon" />
              <span>Apoie o Sapiens</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

