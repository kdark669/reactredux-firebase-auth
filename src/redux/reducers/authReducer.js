import * as actionType from '../actions/types'
const initialState = {
    user: {},
    isLoggedIn: false,
    isPasswordReset: false,
    error:null,
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.AUTH_START:
            return {
                initialState
            }
        
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: actions.user !== null ? actions.user : {}
            }
        
        case actionType.AUTH_LOGOUT:
            return initialState
        
        case actionType.AUTH_FAIL:
            return {
                ...state,
                error: actions.error
            }
        case actionType.AUTH_PASSWORD_RESET:
            return {
                ...state,
                isPasswordReset:true
            }
        default:
            return initialState
    }
}