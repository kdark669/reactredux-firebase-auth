import React from 'react'
import './modal.css'


export const Modal = props => {
    return (
        <div>
            <div className="modal-overlay" />
            <div className="modalWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modals">
                    <div className="modalHeader">
                        <h5>{props.title}</h5>
                        <button type="button" className="modalCloseButton"
                            data-dismiss="modal" aria-label="Close"
                            onClick={props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modalBody">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}