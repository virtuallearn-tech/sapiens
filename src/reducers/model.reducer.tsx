import type { IActionMenuOption } from "@futures/models/ui/MobileActionMenu";
import type { IModelData } from "@interfaces/model";

export interface ModelState {
    model: IModelData | null,
    title: string | null,
    focusName: string | string[] | null,
    textToSpeech: string | null,
    explanation: string | null,
    menuOptions: IActionMenuOption[],
    exploreMenu: any[],
    isAnimating: boolean,
    hasAnimation: boolean
}

export const initialModelState: ModelState = {
    model: null,
    focusName: null,
    title: '',
    textToSpeech: null,
    explanation: null,
    menuOptions: [],
    exploreMenu: [],
    isAnimating: false,
    hasAnimation: false
}

export enum ModelActionType {
    SET_MODEL = "SET_MODEL",
    SET_TITLE = "SET_TITLE",
    SET_FOCUS_NAME = "SET_FOCUS_NAME",
    SET_TEXT_TO_SPEECH = "SET_TEXT_TO_SPEECH",
    SET_EXPLANATION = "SET_EXPLANATION",
    SET_MENU_OPTIONS = "SET_MENU_OPTIONS",
    SET_MENU_EXPLORE = "SET_MENU_EXPLORE",
    SET_ANIMATION = "SET_ANIMATION",
    SET_HAS_ANIMATION = "SET_HAS_ANIMATION"
}

interface SetModelAction {
    type: ModelActionType.SET_MODEL
    payload: IModelData
}

interface SetTitleAction {
    type: ModelActionType.SET_TITLE
    payload: string | null
}

interface SetFocusNameAction {
    type: ModelActionType.SET_FOCUS_NAME
    payload: string | string[] | null
}

interface SetTextToSpeechAction {
    type: ModelActionType.SET_TEXT_TO_SPEECH
    payload: string | null,
}

interface SetExplanationAction {
    type: ModelActionType.SET_EXPLANATION
    payload: string | null
}

interface SetMenuOptionAction {
    type: ModelActionType.SET_MENU_OPTIONS
    payload: IActionMenuOption[]
}

interface SetMenuExploreAction {
    type: ModelActionType.SET_MENU_EXPLORE
    payload: any[]
}

interface SetAnimationAction {
    type: ModelActionType.SET_ANIMATION,
    payload: boolean
}

interface SetHasAnimation {
    type: ModelActionType.SET_HAS_ANIMATION,
    payload: boolean
}

export type ModelAction = SetModelAction | SetFocusNameAction | SetTextToSpeechAction |
    SetExplanationAction | SetMenuOptionAction | SetAnimationAction | SetHasAnimation |
    SetTitleAction | SetMenuExploreAction

export const ModelReducer = (state: ModelState, action: ModelAction): ModelState => {
    switch (action.type) {
        case ModelActionType.SET_MODEL:
            return { ...state, model: action.payload }
        case ModelActionType.SET_TITLE:
            return { ...state, title: action.payload }
        case ModelActionType.SET_FOCUS_NAME:
            return { ...state, focusName: action.payload }
        case ModelActionType.SET_TEXT_TO_SPEECH:
            return { ...state, textToSpeech: action.payload }
        case ModelActionType.SET_EXPLANATION:
            return { ...state, explanation: action.payload }
        case ModelActionType.SET_MENU_OPTIONS:
            return { ...state, menuOptions: action.payload }
        case ModelActionType.SET_MENU_EXPLORE:
            return { ...state, exploreMenu: action.payload }
        case ModelActionType.SET_ANIMATION:
            return { ...state, isAnimating: action.payload }
        case ModelActionType.SET_HAS_ANIMATION:
            return { ...state, hasAnimation: action.payload }
        default:
            return state
    }
}