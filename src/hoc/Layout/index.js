import React from 'react'
import Routes from '../../routes/Routes'
import  Nav from '../../components/Nav'
export const Layout = (props) => {
    return (
        <>
            <Nav />
            <div className="container">
                <Routes />
            </div>
        </>
    )
}
