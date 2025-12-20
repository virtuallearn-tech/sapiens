import { useState, useEffect } from 'react'
import { Button } from './Button'
import { MdInstallMobile } from 'react-icons/md'

export function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      // Impede o navegador de exibir o banner automático
      e.preventDefault()
      // Guarda o evento para disparar quando o usuário quiser
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    // Mostra o prompt manualmente
    deferredPrompt.prompt()

    // Verifica o que o usuário escolheu
    const { outcome } = await deferredPrompt.userChoice
    console.log('Instalação:', outcome)

    // Evento só pode ser usado uma vez
    setDeferredPrompt(null)
  }

  // Só renderiza o botão se tivermos um prompt salvo
  if (!deferredPrompt) return null

  // return <Button onClick={handleInstall}>Instalar App</Button>
  return <li className="m-sidebar__item" onClick={handleInstall}>
    <MdInstallMobile className="m-sidebar__icon"/>
    <span>Instalar App</span>
  </li>
}
