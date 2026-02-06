import React, {
    createContext,
    useContext,
    useReducer,
    type ReactNode
} from 'react'

import {
    uiSceneReducer,
    initialUiSceneState,
    type UiSceneState,
    type UiSceneAction
} from '@reducers/uiScene.reducer'

//context type
interface UiSceneContextType {
    state: UiSceneState,
    dispatch: React.Dispatch<UiSceneAction>
}

//creating the context
const UiSceneContext = createContext<UiSceneContextType | undefined>(undefined)

//provider
interface UiSceneProviderProps {
    children: ReactNode
}

export const UiSceneProvider = ({ children }: UiSceneProviderProps) => {
    const [state, dispatch] = useReducer(uiSceneReducer, initialUiSceneState)
    return (
        <UiSceneContext.Provider value= {{ state, dispatch }
}>
    { children }
    </UiSceneContext.Provider>
)

}

export const useUiScene = () => {
    const context = useContext(UiSceneContext)

    if (!context) {
        throw new Error('useUiScene must be used within UiSceneProvider')
    }

    return context
}