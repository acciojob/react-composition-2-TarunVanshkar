
import React, { useState } from "react";
import './../styles/App.css';
// import Modal from "./Modal";

function Modal({show}){
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="model-overlay" onClick={() => show(false)}>
            <button className="model-close" onClick={() => show(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </div>
    </div>
  )
}
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={() => setShow(true)}>Show Modal</button>
        {
          show && <Modal show={setShow} />
        }
    </div>
  )
}

export default App
