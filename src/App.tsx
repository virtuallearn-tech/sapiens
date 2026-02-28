import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar";
import { AppRoutes } from "@routes/routes";
import { ROUTES_NAME } from "@routes/routesName";
import { useSidebar } from "@store/SidebarContext";
import { useLocation } from "react-router-dom"

//https://docs.enem.dev/introduction

function App() {

  const location = useLocation()
  const isScenePage = location.pathname.startsWith(`${ROUTES_NAME.SCENE}/`)
  
  const { toggle } = useSidebar();

  return (
    <div className="l-container">
      <Header />
      <div className="l-container__body">
        <Sidebar />   
        <main className="l-container__content">
          <AppRoutes/>
        </main>
      </div>
      {/* <button className="fab" onClick={toggle}>
        ☰
      </button> */}
       {!isScenePage && (
        <button className="fab" onClick={toggle}>
          ☰
        </button>
      )} 
    </div>
  );
}


export default App
