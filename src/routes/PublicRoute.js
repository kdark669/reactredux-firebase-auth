import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route {...rest} render={
            props => isLoggedIn ? (<Redirect to="/account" />) :
                (<Component {...props} />)
        }
        />
    )
}
const mapStoreToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})
export default connect(mapStoreToProps)(PublicRoute)