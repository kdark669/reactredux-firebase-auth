import React from 'react'
import { Link } from 'react-router-dom'
//redux
import { connect } from 'react-redux';
import { showModal,logout } from '../../redux/actions'
import Auth from '../Auth';

const Nav = (props) => {
    const { showModal, isLoggedIn, logout} = props
    const openModal = e => {
        console.log('i')
        e.persist();
        showModal();
    }

    const userLogout = e => {
        console.log('user logout')
        e.persist()
        logout();
    }

    return (
        <>
        <nav className="nav navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand"><Link to="/" className="navbar-link">Bees</Link></div>
            <div className="nav-list">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-link">
                        <Link to="/event" className="nav-link">Events</Link>
                    </li>
                        {
                            isLoggedIn ?
                                <>
                                    <li className="nav-link my-2 my-lg-0">
                                        <Link to="/account" className="nav-link">Account</Link>
                                    </li>

                                    <li className="nav-link my-2 my-lg-0">
                                        <Link to="#" className="nav-link" onClick={userLogout}>Logout</Link>
                                    </li>    

                                    
                                </>
                                
                                : <>
                                    <li className="nav-link my-2 my-lg-0">
                                        <Link to="#" className="nav-link" onClick={openModal} >Getting Started</Link>
                                    </li>
                                </>
                        }              
            
                </ul>
            </div>
            </nav>
            <Auth/>
        </>
    )
}
const mapStateToProp = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

// export default connect(null, mapDispatchToProp)(Nav);
export default connect(mapStateToProp,{ showModal,logout})(Nav)
