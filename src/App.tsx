import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar";
import { useSidebar } from "@store/SidebarContext";

function App() {

  const { toggle } = useSidebar();

  return (
    <div className="l-container">
      <Header />
      <div className="l-container__body">
        <Sidebar />   
        <main className="l-container__content">
          {/* Conteúdo principal (rotas, páginas) */}
        </main>
      </div>
      {/* <Footer /> */}
      {/* Botão flutuante */}
      <button className="fab" onClick={toggle}>
        ☰
      </button>
    </div>
  );
}


export default App
