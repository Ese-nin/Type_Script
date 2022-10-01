
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Sorry, bad action type")
    }
}