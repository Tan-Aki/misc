import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// to understand batching

// import React, { useState } from "react";
// import { render } from "react-dom";
// //========================================
// const myContainerStyle = {
//   maxWidth: "240px",
//   margin: "5px auto 0",
//   padding: "5px 0",
//   backgroundColor: "#ddd",
//   textAlign: "center",
//   border: "1px solid #000",
//   fontSize: "16px",
//   fontFamily: "Helvetica",
// };
// const myButtonStyle = {
//   margin: "0 2px",
//   padding: "4px 20px",
//   backgroundColor: "#fff",
//   border: "1px solid #000",
//   borderRadius: "10px",
//   font: "inherit",
//   cursor: "pointer",
//   outline: "none",
// };
// const mySpacerStyle = { margin: "5px 0" };
// //========================================
// const MyApp = () => {
//   const [mySum, setMySum] = useState(0);
//   const myBatchFunction = () => {
//     setMySum((myprevSum) => {
//       return myprevSum + 1;
//     });
//     setMySum((myprevSum) => {
//       return myprevSum + 10;
//     });

//     // setMySum(mySum + 1);
//     // setMySum(mySum + 10);

//     // At this point, myNumber is still 0, not 1.
//   };
//   //------------------------------------------------
//   return (
//     <div style={myContainerStyle}>
//       <button onClick={myBatchFunction} style={myButtonStyle}>
//         Click only once
//       </button>
//       <hr style={mySpacerStyle} />
//       Test: {mySum}
//     </div>
//   );
// };
// render(<MyApp />, document.getElementById("root"));
