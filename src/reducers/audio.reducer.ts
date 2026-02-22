// ============================
// TYPES
// ============================

export type AudioStatus =
  | 'idle'
  | 'loading'
  | 'playing'
  | 'paused'
  | 'stopped'
  | 'error'

export interface AudioState {
  status: AudioStatus
  progress: number        // tempo atual
  duration: number        // duração total
  volume: number          // 0 - 1
  error: string | null
}


// ============================
// INITIAL STATE
// ============================

export const initialAudioState: AudioState = {
  status: 'idle',
  progress: 0,
  duration: 0,
  volume: 1,
  error: null
}


// ============================
// ACTION TYPES
// ============================

export enum AudioActionType {
  SET_STATUS = 'SET_STATUS',
  SET_PROGRESS = 'SET_PROGRESS',
  SET_DURATION = 'SET_DURATION',
  SET_VOLUME = 'SET_VOLUME',
  SET_ERROR = 'SET_ERROR',
  RESET_AUDIO = 'RESET_AUDIO'
}


// ============================
// ACTION INTERFACES
// ============================

interface SetStatusAction {
  type: AudioActionType.SET_STATUS
  payload: AudioStatus
}

interface SetProgressAction {
  type: AudioActionType.SET_PROGRESS
  payload: number
}

interface SetDurationAction {
  type: AudioActionType.SET_DURATION
  payload: number
}

interface SetVolumeAction {
  type: AudioActionType.SET_VOLUME
  payload: number
}

interface SetErrorAction {
  type: AudioActionType.SET_ERROR
  payload: string | null
}

interface ResetAudioAction {
  type: AudioActionType.RESET_AUDIO
}

export type AudioAction =
  | SetStatusAction
  | SetProgressAction
  | SetDurationAction
  | SetVolumeAction
  | SetErrorAction
  | ResetAudioAction


// ============================
// REDUCER
// ============================

export const AudioReducer = (
  state: AudioState,
  action: AudioAction
): AudioState => {

  switch (action.type) {

    case AudioActionType.SET_STATUS:
      return {
        ...state,
        status: action.payload
      }

    case AudioActionType.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      }

    case AudioActionType.SET_DURATION:
      return {
        ...state,
        duration: action.payload
      }

    case AudioActionType.SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      }

    case AudioActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'error'
      }

    case AudioActionType.RESET_AUDIO:
      return initialAudioState

    default:
      return state
  }
}