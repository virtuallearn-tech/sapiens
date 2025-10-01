import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import '@styles/main.scss'
import App from './App.tsx'

import { BrowserRouter } from "react-router-dom";

import { SidebarProvider } from '@store/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>,
)
