import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions'
import { registerUser } from '../../redux/actions'
import { InputField } from '../../ui/InputField';
import { Button } from '../../ui/Button';

import Toast from '../Toast';

const Register = props => {
    const { showModal, registerUser, isOpenToast } = props
    console.log('isopen vaneko '+isOpenToast)
    const [credentials, setCredentials] = useState({});
    const [value, setInputValue ] = useState({})
    const openModal = e => {
        e.persist();
        showModal();
    }

    const handleChange = e => {
        e.persist()
        setInputValue({
            ...value,
            [e.target.name]: e.target.value
        });
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    const onRegisterUser = e => {
        e.preventDefault()
        registerUser(credentials.name,credentials.email, credentials.password)
        resetFrom()
    }
    
    const resetFrom = () => {
        setCredentials({});
        setInputValue({})
    }
    return (
        <>         
            {
                isOpenToast ? <Toast msg="User Added SuccessFully " type="success" /> : null
            }    
        <form onSubmit={onRegisterUser}>
            <div className="form-group">
                <InputField
                    label="Name"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={value.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
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
            <div className="form-group">
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="*****"
                    value={value.password}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Button
                    className="btn btn-sm btn-success"
                    name="Sign up"
                />
            </div>
            <Link to="#" onClick={openModal} >Already have one </Link>
            </form>

            </>
    )
}
const mapStateToProp = state => {
    return {
        isOpenToast: state.toast.isOpenToast
    }
}
export default connect(mapStateToProp, { showModal, registerUser })(Register)