import { Link } from 'react-router-dom'
import { FaHome, FaShareAlt, FaHeart, FaBookOpen, FaInstagram } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { useSidebar } from "@store/SidebarContext";
import { ROUTES_NAME } from '@routes/routesName';
import { InstallPWAButton } from '@components/common/InstallPWAButton';
import { openInstagram } from '@utils/externUrl';

export const Sidebar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <aside className={`m-sidebar ${isOpen ? "m-sidebar--open" : ""}`}>
      <nav className="m-sidebar__nav">
        <ul className="m-sidebar__list">

          <li onClick={close}>
            <Link to="/" className="m-sidebar__item">
              <FaHome className="m-sidebar__icon" />
              <span>Home</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to={ROUTES_NAME.SUMMARY_LIST} className="m-sidebar__item">
              <FaBookOpen className="m-sidebar__icon" />
              <span>Resumos</span>
            </Link>
          </li>
          <InstallPWAButton />
          <li onClick={close}>
            <Link to={ROUTES_NAME.SHARE_APP} className="m-sidebar__item">
              <FaShareAlt className="m-sidebar__icon" />
              <span>Compartilhar</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to={ROUTES_NAME.CONTACT} className="m-sidebar__item">
              <MdContactSupport className="m-sidebar__icon" />
              <span>Contato</span>
            </Link>
          </li>
          <li onClick={close}>
            <Link to={ROUTES_NAME.DONATE} className="m-sidebar__item">
              <FaHeart className="m-sidebar__icon" />
              <span>Apoie o Sapiens</span>
            </Link>
          </li>
          <li onClick={openInstagram} className="m-sidebar__item">
            {/* <Link to={ROUTES_NAME.DONATE} className="m-sidebar__item"> */}
            <FaInstagram className="m-sidebar__icon" />
            <span>Instagram</span>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

{/* <li onClick={close}>
            <Link to={ROUTES_NAME.LEARN_3D}className="m-sidebar__item">
              <BsFillBadge3dFill className="m-sidebar__icon" />
              <span>Aprender em 3D</span>
            </Link>
          </li> */}

{/* <li onClick={close}>
            <Link to="/enem" className="m-sidebar__item">
              <BsFillPencilFill className="m-sidebar__icon" />
              <span>Questões do ENEM</span>
            </Link>
          </li> */}
