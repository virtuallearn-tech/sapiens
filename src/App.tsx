import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar";
import { Signin } from "@pages/Signin";
import { Signup } from "@pages/Signup";
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
          <Signup/> 
          {/* <Signin/> */}
        </main>
      </div>
      <button className="fab" onClick={toggle}>
        ☰
      </button>
    </div>
  );
}


export default App
