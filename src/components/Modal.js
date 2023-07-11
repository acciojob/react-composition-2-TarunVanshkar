
import React from "react";
import './../styles/App.css';

const Modal = ({showprop}) => {

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={() => showprop(false)}>
                <button className="modal-close" onClick={() => showprop(false)}>
                    Close
                </button>
                <p>This is the content of the modal.</p>
            </div>
        </div>
    )
}

export default Modal;
