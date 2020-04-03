import React, { useState } from 'react'
import { Modal } from '../Modal'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { closeModal, signInUser, forgetPassword } from '../../redux/actions'
import { InputField } from '../../ui/InputField';
import { Button } from '../../ui/Button';

const Auth = (props) => {
    const { modal: { isOpenModal }, isPasswordReset, error, closeModal, signInUser, isLoggedIn, forgetPassword } = props

    const [forgetPasswordFlag, setforgetPasswordFlag] = useState(false);
    const [credentials, setCredentials] = useState({});
    const [value, setInputValue] = useState({})

    const handleChange = e => {
        e.persist()
        setInputValue({
            ...value,
            [e.target.name]: e.target.value
        });
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onLoginUser = e => {
        e.preventDefault()
        signInUser(credentials.email, credentials.password)
        setInputValue({});
    }

    const forgetPasswordStatus = e => {
        e.persist()
        setforgetPasswordFlag(!forgetPasswordFlag)
    }

    const onForgetPassword = e => {
        e.preventDefault();
        forgetPassword(credentials.email)
        setforgetPasswordFlag(false)
    }
    const close = () => {
        closeModal()
        setforgetPasswordFlag(false)
    }
    return (
        isOpenModal ?
            <Modal title={forgetPasswordFlag ? "Forgert Password" : "Sign in"} closeModal={close}>
                <form onSubmit={forgetPasswordFlag ? onForgetPassword : onLoginUser}>
                    <div className="form-group" >
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={value.email}
                            placeholder="Your Email"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    {
                        !forgetPasswordFlag ? (<div className="form-group" >
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                                value={value.password}
                                placeholder="*****"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>) : null
                    }

                    <div className="form-group">
                        <Button
                            type="submit"
                            className="btn btn-sm btn-success"
                            name={!forgetPasswordFlag ? 'Sign in' : 'Reset Password'}
                        />
                    </div>
                    <p className="form-group"><Link to="#" onClick={forgetPasswordStatus}>
                        {!forgetPasswordFlag ? "Forget Password" : "Sign in" }
                        </Link></p>
                    
                    <span>
                        Not have account. Don't Worry
                        <Link to="/register"
                            onClick={(e) => { e.persist(); closeModal() }}>
                            Register Here
                        </Link>
                    </span>
                    <span>{error}</span>
                </form>
                {
                    isPasswordReset ?
                        (<p>Reset Password Link has been send within email </p>) : null
                }
            </Modal> : null
    )
}

const mapStateToProps = state => ({
    modal: state.modal,
    error: state.auth.error,
    isLoggedIn: state.auth.isLoggedIn,
    isPasswordReset: state.auth.isPasswordReset

})
export default connect(mapStateToProps, { closeModal, signInUser, forgetPassword })(Auth)