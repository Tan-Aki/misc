import React from "react";
import classNames from "classnames/bind";

import classes from "./Modal.module.scss";
import Transition from "react-transition-group/Transition";


// The 4 states 
// 'entering'
// 'entered'
// 'exiting'
// 'exited'

const animationTiming = {
  enter: 400, // duration for adding the element, from entering to entered
  exit: 1000, // duration for removing the element, from exiting to exited
};

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cx = classNames.bind(classes);
        const modalClass = cx({
          Modal: true,
          ModalOpen: state === "entering",
          ModalClosed: state === "exiting",
        });

        return (
          <div className={modalClass}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};
export default modal;

///// modal opened and closed with css, always present in HTML

// import React from "react";
// import classNames from "classnames/bind";

// import classes from "./Modal.module.scss";

// const modal = (props) => {
//   const cx = classNames.bind(classes);
//   const modalClass = cx({
//     Modal: true,
//     ModalOpen: props.show,
//     ModalClosed: !props.show,
//   });

//   return (
//     <div className={modalClass}>
//       <h1>A Modal</h1>
//       <button className="Button" onClick={props.closed}>
//         Dismiss
//       </button>
//     </div>
//   );
// };
// export default modal;
