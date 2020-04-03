import * as actionType from '../actions/types'
const initialState = {
    userDetai: {},
    error: null,
    loading:false
}

export default (state = initialState, actions) => { 
    switch (actions.type) {
        case actionType.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionType.GET_PROFILE:
            return {
                ...state,
                userDetai: actions.profile !== null ? actions.profile : {},
                loading:false
            }
        default:
            return state
    }
}