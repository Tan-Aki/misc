import React from 'react';
import './App.scss';

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
    <h1>React Animations</h1>
    <Modal />
    <Backdrop />
    <button className="Button">Open Modal</button>
    <h3>Animating Lists</h3>
    <List />
  </div>
  );
}

export default App;
