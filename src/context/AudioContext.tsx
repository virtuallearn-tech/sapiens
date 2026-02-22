import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode
} from 'react'

import {
  AudioReducer,
  initialAudioState,
  type AudioState,
  type AudioAction
} from '@reducers/audio.reducer'


// ============================
// CONTEXT TYPE
// ============================

interface AudioContextProps {
  state: AudioState
  dispatch: React.Dispatch<AudioAction>
}


// ============================
// CREATE CONTEXT
// ============================

export const AudioContext = createContext<AudioContextProps | undefined>(undefined)


// ============================
// PROVIDER
// ============================

interface AudioProviderProps {
  children: ReactNode
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const [state, dispatch] = useReducer(AudioReducer, initialAudioState)

  return (
    <AudioContext.Provider value={{ state, dispatch }}>
      {children}
    </AudioContext.Provider>
  )
}


// ============================
// HOOK
// ============================

export const useAudio = () => {
  const context = useContext(AudioContext)

  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }

  return context
}