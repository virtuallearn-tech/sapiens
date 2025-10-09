import { useEffect, useState } from "react"
import { speakQueue, pauseSpeaking, resumeSpeaking, stopSpeaking } from "@utils/speech"

type SpeakOptions = {
  onParagraphEnd?: (text: string) => void
  onAllEnd?: () => void
}

export function useSpeech() {
  const [isSupported, setIsSupported] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false)
    }
  }, [])

  const speak = (texts: string | string[], options?:SpeakOptions) => {
  
    if (!isSupported) return

    setIsSpeaking(true)
    setIsPaused(false)

    speakQueue(texts, {
      onParagraphEnd: (text) => {
        console.log("Terminou parágrafo:", text)
        options?.onParagraphEnd?.(text)
      },
      onAllEnd: () => {
        setIsSpeaking(false)
        setIsPaused(false)
        console.log("Leitura finalizada!")
         options?.onAllEnd?.()
      }
    })

  }

  const pause = () => {
    pauseSpeaking()
    setIsPaused(true)
  }

  const resume = () => {
    resumeSpeaking()
    setIsPaused(false)
  }

  const stop = () => {
    stopSpeaking()
    setIsSpeaking(false)
    setIsPaused(false)
  }

  return {
    isSupported,
    isSpeaking,
    isPaused,
    speak,
    pause,
    resume,
    stop,
  }
}
