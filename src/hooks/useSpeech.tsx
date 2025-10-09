import { useEffect, useState } from "react"
import { speakQueue, pauseSpeaking, resumeSpeaking, stopSpeaking } from "@utils/speech"

export function useSpeech() {
  const [isSupported, setIsSupported] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false)
    }
  }, [])

  const speak = (texts: string | string[]) => {
    // if (!isSupported) return
    // setIsSpeaking(true)
    // setIsPaused(false)
    // speakQueue(texts)

    if (!isSupported) return

    setIsSpeaking(true)
    setIsPaused(false)

    speakQueue(texts, {
      onParagraphEnd: (text) => {
        console.log("Terminou parágrafo:", text)
      },
      onAllEnd: () => {
        setIsSpeaking(false)
        setIsPaused(false)
        console.log("Leitura finalizada!")
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
