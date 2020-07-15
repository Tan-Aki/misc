import React from "react";
import classNames from "classnames/bind";

import classes from "./Modal.module.scss";
import CSSTransition from "react-transition-group/CSSTransition";

// The 4 states
// 'entering'
// 'entered'
// 'exiting'
// 'exited'

const animationTiming = {
  enter: 400, // duration for adding the element, from entering to entered
  exit: 1000, // duration for removing the element, from exiting to exited
};

const cx = classNames.bind(classes);

const modalClass = cx({
  Modal: true,
});

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: classes.ModalOpen,
        exitActive: classes.ModalClosed,

        // enterActive: classes["fade-slide-enter-active"],
        // exitActive: classes["fade-slide-exit-active"],

        // appear: classes["my-appear"],
        // appearActive: classes["my-active-appear"],
        // appearDone: classes["my-done-appear"],
        // enter: classes["my-enter"],
        // enterDone: classes["my-done-enter"],
        // exit: classes["my-exit"],
        // exitDone: classes["my-done-exit"],
      }}
    >
      <div className={modalClass}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};
export default modal;

///// modal opened and closed with css and Transitions, disappears from HTML when closed, and appears when opened

// import React from "react";
// import classNames from "classnames/bind";

// import classes from "./Modal.module.scss";
// import Transition from "react-transition-group/Transition";

// // The 4 states
// // 'entering'
// // 'entered'
// // 'exiting'
// // 'exited'

// const animationTiming = {
//   enter: 400, // duration for adding the element, from entering to entered
//   exit: 1000, // duration for removing the element, from exiting to exited
// };

// const cx = classNames.bind(classes);

// const modal = (props) => {
//   return (
//     <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
//       {(state) => {
//
//         const modalClass = cx({
//           Modal: true,
//           ModalOpen: state === "entering",
//           ModalClosed: state === "exiting",
//         });

//         return (
//           <div className={modalClass}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//               Dismiss
//             </button>
//           </div>
//         );
//       }}
//     </Transition>
//   );
// };
// export default modal;

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
