//type state
export interface UiSceneState {
    isShowMenuOptions: boolean,
    isShowDetailsOptions: boolean,
    isShowExploreMenu: boolean,
    isFullscreen: boolean,
    focusedItem: string | null
}

//initial state
export const initialUiSceneState: UiSceneState = {
    isShowMenuOptions: false,
    isShowDetailsOptions: false,
    isShowExploreMenu: false,
    isFullscreen: false,
    focusedItem: null
}

//actions type
export type UiSceneAction =
    { type: 'OPEN_MENU_OPTIONS' } |
    { type: 'CLOSE_MENU_OPTIONS' } |
    { type: 'TOGGLE_MENU_OPTION' } |
    { type: 'OPEN_DETAIL_OPTION' } |
    { type: 'CLOSE_DETAIL_OPTION' } |
    { type: 'SET_FOCUSED_ITEM', payload: string | null } |
    { type: 'TOGGLE_FULLSCREEN' } |
    { type: 'TOGGLE_EXPLORE_MENU' }

//reducer
export function uiSceneReducer(
    state: UiSceneState,
    action: UiSceneAction
): UiSceneState {
    switch (action.type) {
        case 'OPEN_MENU_OPTIONS':
            return { ...state, isShowMenuOptions: true }
        case 'CLOSE_MENU_OPTIONS':
            return { ...state, isShowMenuOptions: false }
        case 'TOGGLE_MENU_OPTION':
            return { ...state, isShowMenuOptions: !state.isShowMenuOptions }
        case 'OPEN_DETAIL_OPTION':
            return { ...state, isShowDetailsOptions: true }
        case 'CLOSE_DETAIL_OPTION':
            return { ...state, isShowDetailsOptions: false }
        case 'TOGGLE_FULLSCREEN':
            return { ...state, isFullscreen: !state.isFullscreen }
        case 'TOGGLE_EXPLORE_MENU':
            return { ...state, isShowExploreMenu: !state.isShowExploreMenu }
        case 'SET_FOCUSED_ITEM':
            return { ...state, focusedItem: action.payload }
        default:
            return state;
    }
}
