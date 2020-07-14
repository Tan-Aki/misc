import React, { useState } from "react";
import Transition from "react-transition-group/Transition";

import "./App.scss";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

//////////////////////////////////////////////////
//// see Modal.js for more comments on animations /////
//////////////////////////////////////////////////
function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [blockStatus, setBlockStatus] = useState(false);

  const showModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={() => setBlockStatus((prevstate) => !prevstate)}>
        Toggle
      </button>
      <br />
      <Transition
        in={blockStatus}
        timeout={300}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
        // all these callbacks can be used to add some code when needed
      >
        
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <Modal show={modalStatus} closed={closeModal} />

      {/* {modalStatus ?  : null} */}
      {modalStatus ? <Backdrop show /> : null}
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;

///// modal opened and closed with css, always present in HTML

// import React, { useState } from "react";
// import "./App.scss";

// import Modal from "./components/Modal/Modal";
// import Backdrop from "./components/Backdrop/Backdrop";
// import List from "./components/List/List";

// function App() {
//   const [modalStatus, setModalStatus] = useState(false);

//   const showModal = () => {
//     setModalStatus(true);
//   };
//   const closeModal = () => {
//     setModalStatus(false);
//   };

//   return (
//     <div className="App">
//       <h1>React Animations</h1>
//       <Modal closed={closeModal} show={modalStatus} />
//       <Backdrop show={modalStatus} />
//       <button className="Button" onClick={showModal}>
//         Open Modal
//       </button>
//       <h3>Animating Lists</h3>
//       <List />
//     </div>
//   );
// }

// export default App;
