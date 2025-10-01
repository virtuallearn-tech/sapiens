import { FaHome, FaShareAlt, FaBookOpen } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";

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
            <FaBookOpen className="m-sidebar__icon" />
            <span>Conteúdo</span>
          </li>
          <li className="m-sidebar__item" onClick={close}>
            <GiProgression className="m-sidebar__icon" />
            <span>Minhas Atividades</span>
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


// import { FaHome, FaShareAlt, FaBookOpen } from "react-icons/fa";
// import { MdScience, MdContactSupport } from "react-icons/md";
// import { GiProgression } from "react-icons/gi";

// export const Sidebar = () => {
//   return (
//     <aside className="m-sidebar">
//       <nav className="m-sidebar__nav">
//         <ul className="m-sidebar__list">
//           <li className="m-sidebar__item">
//             <FaHome className="m-sidebar__icon" />
//             <span>Home</span>
//           </li>
//           <li className="m-sidebar__item">
//             <MdScience className="m-sidebar__icon" />
//             <span>Explorar em 3D</span>
//           </li>
//           <li className="m-sidebar__item">
//             <FaBookOpen className="m-sidebar__icon" />
//             <span>Conteúdo</span>
//           </li>
//           <li className="m-sidebar__item">
//             <GiProgression className="m-sidebar__icon" />
//             <span>Minhas Atividades</span>
//           </li>
//           <li className="m-sidebar__item">
//             <FaShareAlt className="m-sidebar__icon" />
//             <span>Compartilhar</span>
//           </li>
//           <li className="m-sidebar__item">
//             <MdContactSupport className="m-sidebar__icon" />
//             <span>Contato</span>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };
