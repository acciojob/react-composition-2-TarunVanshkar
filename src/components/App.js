
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={() => setVisible(true)}>Show Modal</button>
        {
          visible && <Modal show={setVisible} />
        }
    </div>
  )
}

export default App
