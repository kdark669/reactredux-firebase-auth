import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import toastReducer from './toastReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'

export default combineReducers({
    modal: modalReducer,
    toast: toastReducer,
    auth: authReducer,
    profile: profileReducer,
})