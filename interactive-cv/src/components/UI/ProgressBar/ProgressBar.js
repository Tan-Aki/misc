import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.module.scss";

const ProgressBar = (props) => {
  return (
    <React.Fragment>
      <progress max={props.max} value={props.value}></progress>
    </React.Fragment>
  );
};

ProgressBar.propTypes = {};

export default ProgressBar;

////// first progress bar

// import React from "react";
// import PropTypes from "prop-types";
// import "./ProgressBar.module.scss";

// const ProgressBar = (props) => {
//   return (
//     <React.Fragment>
//       <progress max={props.max} value={props.value}></progress>
//     </React.Fragment>
//   );
// };

// ProgressBar.propTypes = {};

// export default ProgressBar;
