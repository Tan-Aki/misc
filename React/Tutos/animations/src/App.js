import React, { useState } from "react";
import "./App.scss";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal closed={closeModal} show={modalStatus} />
      <Backdrop show={modalStatus} />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
