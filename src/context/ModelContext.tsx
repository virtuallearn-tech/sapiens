import { 
    initialModelState,
    ModelReducer,
    type ModelAction, 
    type ModelState } 
from "@reducers/model.reducer"

import React, {
    createContext,
    useContext,
    useReducer,
    type ReactNode
} from "react"

interface ModelContextProps{
    state: ModelState,
    dispatch: React.Dispatch<ModelAction>
}

export const ModelContext = createContext<ModelContextProps|undefined>(undefined)

interface ModelProviderProps{
    children: ReactNode
}

export const ModelProvider = ({children}: ModelProviderProps) => {
    const [state, dispatch] = useReducer(ModelReducer, initialModelState)

    return (
        <ModelContext.Provider value={{state, dispatch}}>
            {children}
        </ModelContext.Provider>
    )
}

export const useModel = () => {
    const context = useContext(ModelContext)
    if(!context){
        throw new Error("useModel must be used with a model provider")
    }
    return context
}