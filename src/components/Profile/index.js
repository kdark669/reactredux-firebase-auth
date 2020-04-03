import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
    const { userDetail } = props
    return (
        <div className="emp-profile">
            <form action="">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={userDetail.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>{userDetail.displayName}</h5>
                            <span>{userDetail.email}</span>
                            <p>{userDetail.emailVerified ? '' : (<a href="#">email is  not verified </a>)}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userDetail: state.auth.user.user
    }
}

export default  connect(mapStateToProps)(Profile)