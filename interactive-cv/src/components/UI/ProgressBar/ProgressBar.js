import * as React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

import classes from "./ProgressBar.module.scss";

const ProgressBar = (props) => {
  const [width] = useWindowSize();

  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  let progressDivWidth;
  width < 913 ? (progressDivWidth = (width * 33) / 100) : (progressDivWidth = 170);

  const [progressWidth, setProgressWidth] = React.useState(0);
  // let progressDivWidth = 150;

  React.useEffect(() => {
    setProgressWidth((props.percent / 100) * progressDivWidth);
    // console.log("rendering");
    // return () => {
    //   console.log("unmounting");
    // };
  }, [props.percent, progressDivWidth]);

  return (
    <div className={classes.ProgressDiv} style={{ width: `${progressDivWidth}px` }}>
      <div style={{ width: `${progressWidth}px` }} className={classes.Progress} />
    </div>
  );
};

export default ProgressBar;

//// example from https://medium.com/swlh/creating-an-animated-progress-bar-in-react-5e85e8f6ec16
// import * as React from "react";

// import classes from "./ProgressBar.module.scss";

// const ProgressBar = (props) => {
//   let progress = props.percent * props.width;

//   return (
//     <div className={classes.ProgressDiv} style={{ width: props.width }}>
//       <div style={{ width: `${progress}px` }} className={classes.Progress} />
//     </div>
//   );
// };

// export default ProgressBar;

//// third progress bar, doesn't work !

// import React from "react";
// import PropTypes from "prop-types";
// import classes from "./ProgressBar.module.scss";
// import ProgressBar from "react-animated-progress-bar";

// const ProgressBarCust = (props) => {
//   var bar = new ProgressBar.Line(container, {
//     strokeWidth: 4,
//     easing: "easeInOut",
//     duration: 1400,
//     color: "#FFEA82",
//     trailColor: "#eee",
//     trailWidth: 1,
//     svgStyle: { width: "100%", height: "100%" },
//   });
//   return (
//     <div className={classes.ProgressBar}>
//       <ProgressBar
//         width="400px"
//         height="10px"
//         rect
//         fontColor="gray"
//         percentage={props.value}
//         rectPadding="1px"
//         rectBorderRadius="20px"
//         trackPathColor="transparent"
//         bgColor="#333333"
//         trackBorderColor="grey"
//       />
//       {/* <progress max={props.max} value={props.value}></progress> */}
//     </div>
//   );
// };
//////   second progress bar with colors and percentage
// import React from "react";
// import PropTypes from "prop-types";
// import classes from "./ProgressBar.module.scss";
// import ProgressBar from "react-animated-progress-bar";

// const ProgressBarCust = (props) => {
//   return (
//     <div className={classes.ProgressBar}>
//       <ProgressBar
//         width="400px"
//         height="10px"
//         rect
//         fontColor="gray"
//         percentage={props.value}
//         rectPadding="1px"
//         rectBorderRadius="20px"
//         trackPathColor="transparent"
//         bgColor="#333333"
//         trackBorderColor="grey"
//       />
//       {/* <progress max={props.max} value={props.value}></progress> */}
//     </div>
//   );
// };

// ProgressBarCust.propTypes = {};

// export default ProgressBarCust;

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
