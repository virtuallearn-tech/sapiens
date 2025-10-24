
let selectedVoice: SpeechSynthesisVoice | null = null
let queue: string[] = []
let currentUtterance: SpeechSynthesisUtterance | null = null

// Carrega vozes disponíveis e tenta escolher uma feminina em pt-BR
function loadVoices() {
  const voices = speechSynthesis.getVoices()

  // tenta encontrar uma voz feminina em português
  const femaleVoice = voices.find(
    (v) =>
      v.lang.startsWith("pt-BR") &&
      v.name.toLowerCase().includes("female")
  )

  // fallback: qualquer voz pt-BR
  const ptVoice = voices.find((v) => v.lang.startsWith("pt-BR"))

  selectedVoice = femaleVoice || ptVoice || null
}

// garante que as vozes sejam carregadas
speechSynthesis.onvoiceschanged = loadVoices
loadVoices()

export function speakQueue(
  input: string | string[],
  options?: {
    onParagraphEnd?: (text: string) => void
    onAllEnd?: () => void
  }
) {
  
  if (!("speechSynthesis" in window)) {
    console.warn("Este navegador não suporta SpeechSynthesis")
    return
  }

  const texts = Array.isArray(input) ? input : [input]
  stopSpeaking()
  queue = [...texts]

  playNext(options)
}

function playNext(options?: { onParagraphEnd?: (text: string) => void; onAllEnd?: () => void }) {
  if (queue.length === 0) {
    if (options?.onAllEnd) options.onAllEnd()
    return
  }

  const text = queue.shift()!
  currentUtterance = new SpeechSynthesisUtterance(text)
  currentUtterance.lang = "pt-BR"
  currentUtterance.rate = 0.9
  currentUtterance.pitch = 1.05

  if (selectedVoice) currentUtterance.voice = selectedVoice

  currentUtterance.onend = () => {
    if (options?.onParagraphEnd) options.onParagraphEnd(text)
    playNext(options)
  }

  speechSynthesis.speak(currentUtterance)
}


export function pauseSpeaking() {
  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause()
  }
}

export function resumeSpeaking() {
  if (speechSynthesis.paused) {
    speechSynthesis.resume()
  }
}

export function stopSpeaking() {
  if (speechSynthesis.speaking || speechSynthesis.paused) {
    speechSynthesis.cancel()
  }
  queue = []
  currentUtterance = null
}
