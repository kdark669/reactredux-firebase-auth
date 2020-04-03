import { OPEN_TOAST, CLOSE_TOAST } from '../actions/types';

const initialState = {
    isOpenToast: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case OPEN_TOAST:
            return {
                ...state,
                isOpenToast: true
            }
        case CLOSE_TOAST:
            return {
                initialState
            }

        default:
            return state
    }
}