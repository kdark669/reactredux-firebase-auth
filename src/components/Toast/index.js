import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import './Toast.css'
import { connect } from 'react-redux'

const Toast = (props) => {
    const { closeToast, showModal} = props
    const { msg = "I love React", type = "success" } = props
    
    useEffect(() => {
        setTimeout(
            () => {
                closeToast()
            }, 2000, showModal()
        )
    }, [closeToast, showModal])
    return (
        <div>
            <div className={`alert alert-${type}`}>
                <p>{msg}</p>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeToast: () => dispatch(actions.closeToast()),
        showModal: () => dispatch(actions.showModal())
    }
}
export default connect(null,mapDispatchToProps)(Toast)