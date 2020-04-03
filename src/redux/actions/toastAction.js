import { OPEN_TOAST, CLOSE_TOAST } from './types'

export const showToast = () => {
    return {
        type: OPEN_TOAST
    }
}

export const closeToast = () => {
    return {
        type: CLOSE_TOAST
    }
}
