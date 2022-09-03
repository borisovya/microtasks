type actionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: actionType): StateType => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            let stateCopy = {...state, collapsed: !state.collapsed}
            return stateCopy;
        default:
            return state
    }
    return state
}