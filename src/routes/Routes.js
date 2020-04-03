import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
//routes
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
//actions
import { checkAuth } from '../redux/actions/authAction'
//component
import { Home } from '../pages/Home'
import Register from '../components/Auth/Register'
import { Event } from '../pages/Event'
import Account from '../pages/Account'



import Auth from '../components/Auth'

const Routes = (props) => {
    const { isLoggedIn, checkAuth } = props
    
    useEffect(() => {
        checkAuth();
    }, [isLoggedIn,checkAuth])

    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/account" component={ isLoggedIn ? Account : Auth } exact />
            <PrivateRoute path="/event" component={Event} exact />
            <PublicRoute path="/register" component={ isLoggedIn ? Account : Register } exact />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}
export default connect(mapStateToProps, { checkAuth })(Routes)
