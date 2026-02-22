import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./firebaseConfig";
import '@styles/main.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from '@store/SidebarContext.tsx'

import { registerSW } from 'virtual:pwa-register'
import { ModelProvider } from '@context/ModelContext.tsx';
import { UiSceneProvider } from '@context/UiSceneContext.tsx';
import { AudioProvider } from '@context/AudioContext.tsx';

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    if (confirm("Nova versão disponível. Atualizar?")) {
      updateSW()
    }
  },
})

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ModelProvider>
    <UiSceneProvider>
      <AudioProvider>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </AudioProvider>
    </UiSceneProvider>
  </ModelProvider>
  // </StrictMode>,
)

