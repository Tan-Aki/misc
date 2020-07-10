import React from "react";
import classNames from "classnames/bind";

import classes from "./Modal.module.scss";

const modal = (props) => {
  const cx = classNames.bind(classes);
  const modalClass = cx({
    Modal: true,
    ModalOpen: props.show,
    ModalClosed: !props.show,
  });

  return (
    <div className={modalClass}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
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