import React from 'react'
import { PropTypes } from 'prop-types'
import '../../App.css'

export const InputField = (props) => {


    const {
        label = "",
        type = "text",
        name = "",
        placeholder = "",
        value = "",
        className = "",
        onChange,
        error = ""
    } = props



    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                className={className}
                onChange={onChange}
            />
            
            <span className="error" style={styles.error}>{error}</span>
        </>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
}

const styles = {
    error: {
        color: "lightcoral",
        display:"flex"
    }
}