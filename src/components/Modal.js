
import React from "react";
import './../styles/App.css';

const Modal = (props) => {

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="model-overlay" onClick={() => props.show(false)}>
            <button className="model-close" onClick={() => props.show(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </div>
    </div>
  )
}

export default Modal;
