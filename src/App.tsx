import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar";
import { AppRoutes } from "@routes/routes";
import { useSidebar } from "@store/SidebarContext";

//https://docs.enem.dev/introduction

function App() {

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
      <button className="fab" onClick={toggle}>
        ☰
      </button>
    </div>
  );
}


export default App
