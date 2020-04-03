import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
    isOpenModal: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: true
            }
        case CLOSE_MODAL:
            return {
                initialState
            }

        default:
            return state
    }
}