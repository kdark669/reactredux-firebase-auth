import React from 'react'
import { PropTypes } from 'prop-types'
export const Button = (props) => {
    const {
        type = "submit",
        name = "",
        className = "",
    } = props


    return (
        <>
            <button
                type={type}
                className={className}>
                {name}
            </button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}
