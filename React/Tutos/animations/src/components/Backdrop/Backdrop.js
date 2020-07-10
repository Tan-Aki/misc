import React from "react";
import classNames from "classnames/bind";

import classes from "./Backdrop.module.scss";

const backdrop = (props) => {
  const cx = classNames.bind(classes);
  const backdropClass = cx({
    Backdrop: true,
    BackdropOpen: props.show,
    BackdropClosed : !props.show,
  });

  return <div className={backdropClass}></div>;
};

export default backdrop;

// import React from 'react';

// import './Backdrop.css';

// const backdrop = (props) => (
//     <div className="Backdrop"></div>
// );

// export default backdrop;
