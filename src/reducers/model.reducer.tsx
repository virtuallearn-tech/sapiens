import type { IActionMenuOption } from "@futures/models/ui/MobileActionMenu";
import type { IClass, IModelData } from "@interfaces/model";

export interface ModelState {
    model: IModelData | null,
    title: string | null,
    focusName: string | string[] | null,
    textToSpeech: string | null,
    explanation: string | null,
    menuOptions: IActionMenuOption[],
    classTexts: IClass[],
    currentClassIndex: number,
    exploreMenu: any[],
    isAnimating: boolean,
    hasAnimation: boolean,
    sound: string | null
}

export const initialModelState: ModelState = {
    model: null,
    focusName: null,
    title: '',
    textToSpeech: null,
    explanation: null,
    menuOptions: [],
    exploreMenu: [],
    classTexts: [],
    currentClassIndex: 0,
    isAnimating: false,
    hasAnimation: false,
    sound: null
}

export enum ModelActionType {
    SET_MODEL = "SET_MODEL",
    SET_TITLE = "SET_TITLE",
    SET_FOCUS_NAME = "SET_FOCUS_NAME",
    SET_TEXT_TO_SPEECH = "SET_TEXT_TO_SPEECH",
    SET_EXPLANATION = "SET_EXPLANATION",
    SET_MENU_OPTIONS = "SET_MENU_OPTIONS",
    SET_CLASS_TEXT = "SET_CLASS_TEXT",
    SET_CLEAR_CLASS_TEXTS = 'SET_CLEAR_CLASS_TEXTS',
    SET_NEXT_CLASS_STEP = "NEXT_CLASS_STEP",
    SET_MENU_EXPLORE = "SET_MENU_EXPLORE",
    SET_ANIMATION = "SET_ANIMATION",
    SET_HAS_ANIMATION = "SET_HAS_ANIMATION",
    SET_SOUND = "SET_SOUND"
}

interface SetModelAction {
    type: ModelActionType.SET_MODEL
    payload: IModelData
}

interface SetTitleAction {
    type: ModelActionType.SET_TITLE
    payload: string | null
}

interface SetSoundAction {
    type: ModelActionType.SET_SOUND
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

interface SetClassTextAction {
    type: ModelActionType.SET_CLASS_TEXT
    payload: IClass[]
}

interface SetClearClassTextAction {
    type: ModelActionType.SET_CLEAR_CLASS_TEXTS
    payload: IClass[]
}

//SET_NEXT_CLASS_STEP
interface SetNextClassStepAction {
    type: ModelActionType.SET_NEXT_CLASS_STEP
    payload: number
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
    SetTitleAction | SetMenuExploreAction | SetClassTextAction
    | SetClearClassTextAction | SetNextClassStepAction
    | SetSoundAction

export const ModelReducer = (state: ModelState, action: ModelAction): ModelState => {
    //console.log('MODEL REDUCER:', action.type, action.payload)
    switch (action.type) {
        case ModelActionType.SET_MODEL:
            return { ...state, model: action.payload }

        case ModelActionType.SET_TITLE:
            return { ...state, title: action.payload }
        case ModelActionType.SET_FOCUS_NAME:
            return { ...state, focusName: action.payload }

        case ModelActionType.SET_TEXT_TO_SPEECH:
            return { ...state, textToSpeech: action.payload }


        case ModelActionType.SET_CLASS_TEXT:
            return { ...state, classTexts: action.payload }
        case ModelActionType.SET_CLEAR_CLASS_TEXTS:
            return { ...state, classTexts: [] }
        case ModelActionType.SET_NEXT_CLASS_STEP:
            return { ...state, currentClassIndex: state.currentClassIndex + 1 }


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
        case ModelActionType.SET_SOUND:
            return { ...state, sound: action.payload }
        default:
            return state
    }
}