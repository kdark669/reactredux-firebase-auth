import * as action from './types'
import fireb from '../../firebase/firebase'

// const getProfile = () => dispatch => {
//     dispatch(setLoading())
//     console.log('getProfile')
//     let userDetail = fireb.auth().currentUser;
//     if (userDetail !== null) {
//         var  profile =  {
//             name:userDetail.displayName,
//             email:userDetail.email,
//             photoUrl:userDetail.photo,
//         }
//         return {
//             type: action.GET_PROFILE,
//             profile:profile
//         }
//     }
// }


// const setLoading = () => {
//     return {
//         type: action.SET_LOADING
//     }
// }