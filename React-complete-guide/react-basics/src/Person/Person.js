import React from "react";
import classes from "./Person.module.scss";

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

// // error boundary

// import React from "react";
// import classes from "./Person.module.scss";

// const person = props => {
//   const rnd = Math.random();

//   if (rnd > 0.7) {
//     throw new Error("Something went wrong");
//   }

//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;

// styled components, inline style

// import React from "react";
// // import "./Person.css";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media only screen and (min-width: 500px) {
//     width: 450px;
//   }
// `;

// const person = props => {
//   // const style = {
//   //   "@media only screen and (min-width: 500px)": {
//   //     width: "450px"
//   //   }
//   // };

//   return (
//     // <div className="Person" style={style}>
//     <StyledDiv>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </StyledDiv>
//     // </div>
//   );
// };

// export default person;
