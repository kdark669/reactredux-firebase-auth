import *  as actions from './types'
import { closeModal } from './modalAction'
import {showToast} from './toastAction'
import fireb from '../../firebase/firebase'


export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccess = (user) => {
    return {
        type: actions.AUTH_SUCCESS,
        user: user
    }
}

export const authLogOut = () => {
    return {
        type: actions.AUTH_LOGOUT
    }
}

export const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error:error
    }
}
export const authResetPassword = () => {
    return {
        type: actions.AUTH_PASSWORD_RESET,
    }
}


export const registerUser = (name, email, password) => dispatch => {
    dispatch(authStart())
    fireb.auth().createUserWithEmailAndPassword(email, password).then(
        () => {
            let user = fireb.auth().currentUser;
            user.updateProfile({
                displayName: name,
                photoURL: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"  
            }).then(
                (res) => {
                    user.sendEmailVerification().then(
                        () => {
                            dispatch(showToast())
                            dispatch(authSuccess(user))
                        }
                    ).catch((error) => {
                        dispatch(authFail(error.message))
                    })
                }
            ).catch(
                (err) => {
                    dispatch(authFail(err.message))
                }
            )
        }
    ).catch(
        (error) => {
            dispatch(authFail(error.message))
        }
    )
}

export const signInUser = (email, password) => dispatch => {
    fireb.auth().signInWithEmailAndPassword(email, password).then(res => {
        dispatch(authStart());
            if (res) {
                localStorage.setItem('user', JSON.stringify(res))
                dispatch(authSuccess(res));
                dispatch(closeModal());
            }
    }).catch((error) => {
        return dispatch(authFail(error.message))
        })
}

export const checkAuth = () => dispatch => {
    let user = localStorage.getItem('user');
    if (user) {
        return dispatch(authSuccess(JSON.parse(user)))
    }
    else {
        return dispatch(authLogOut())
    }
}

export const logout = () => dispatch => { 
    return fireb.auth().signOut()
        .then(res => {
            localStorage.removeItem('user')
            dispatch(authLogOut())
        }).catch(err => console.log(err.message))
} 

export const forgetPassword = email => dispatch => {
    dispatch(authStart())
    fireb.auth().sendPasswordResetEmail(email)
        .then((res) => {
            dispatch(authResetPassword())
        }).catch((error) => {
            dispatch(authFail(error.message))
        })
}

export const changePassword = (password) => dispatch => {
    dispatch(authStart())
    fireb.auth().changePassword(password)
        .then((res) => {
            dispatch(authResetPassword())
        }).catch(error => dispatch(authFail(error.message)))
}