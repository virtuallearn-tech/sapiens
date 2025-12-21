import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./firebaseConfig";
import '@styles/main.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from '@store/SidebarContext.tsx'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    if (confirm("Nova versão disponível. Atualizar?")) {
      updateSW()
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>,
)

