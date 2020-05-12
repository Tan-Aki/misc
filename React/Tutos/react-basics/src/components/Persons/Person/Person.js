import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.scss";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] render...");

    return (
      <Fragment>
        {this.context.authenticated ? <p> Authenticated !</p> : <p> please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2"> {this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// // with context API, method 1, can only be used in JSX

// import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";

// import classes from "./Person.module.scss";
// import withClass from "../../../hoc/withClass";
// import Aux from "../../../hoc/Aux";
// import AuthContext from "../../../context/auth-context";

// class Person extends Component {
//   constructor(props) {
//     super(props);
//     this.inputElementRef = React.createRef();
//   }

//   componentDidMount() {
//     // this.inputElement.focus();
//     this.inputElementRef.current.focus();
//   }

//   render() {
//     console.log("[Person.js] render...");

//     return (
//       <Fragment>
//         <AuthContext.Consumer>
//           {context => (context.authenticated ? <p> Authenticated !</p> : <p> please log in</p>)}
//         </AuthContext.Consumer>
//         <p key="i1" onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p key="i2"> {this.props.children}</p>
//         <input
//           key="i3"
//           // ref={inputEl => {
//           //   this.inputElement = inputEl;
//           // }}
//           ref={this.inputElementRef}
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </Fragment>
//     );
//   }
// }

// Person.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// };

// export default withClass(Person, classes.Person);

// prop chain problem, without context API

// import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";

// import classes from "./Person.module.scss";
// import withClass from "../../../hoc/withClass";
// import Aux from "../../../hoc/Aux";

// class Person extends Component {
//   constructor(props) {
//     super(props);
//     this.inputElementRef = React.createRef();
//   }

//   componentDidMount() {
//     // this.inputElement.focus();
//     this.inputElementRef.current.focus();
//   }

//   render() {
//     console.log("[Person.js] render...");

//     return (
//       <Fragment>
//         {this.props.isAuth ? <p> Authenticated !</p> : <p> please log in</p>}
//         <p key="i1" onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p key="i2"> {this.props.children}</p>
//         <input
//           key="i3"
//           // ref={inputEl => {
//           //   this.inputElement = inputEl;
//           // }}
//           ref={this.inputElementRef}
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </Fragment>
//     );
//   }
// }

// Person.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// };

// export default withClass(Person, classes.Person);

// // component with Aux for root elements without classes

// import React, { Component } from "react";
// import classes from "./Person.module.scss";
// import Aux from "../../../hoc/Aux";

// class Person extends Component {
//   render() {
//     console.log("[Person.js] render...");

//     return (
//       <Aux>
//         <p key="i1" onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p key="i2"> {this.props.children}</p>
//         <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
//       </Aux>
//     );
//   }
// }

// export default Person;

// // component with array trick for root elements without classes
// import React, { Component } from "react";
// import classes from "./Person.module.scss";

// class Person extends Component {
//   render() {
//     console.log("[Person.js] render...");

//     return [
//       <p key="i1" onClick={this.props.click}>
//         I'm {this.props.name} and I am {this.props.age} years old!
//       </p>,
//       <p key="i2"> {this.props.children}</p>,
//       <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
//     ];
//   }
// }

// export default Person;

// //   component with div around it (root element).

// import React, { Component } from "react";
// import classes from "./Person.module.scss";

// class Person extends Component {
//   render() {
//     console.log("[Person.js] render...");

//     return (
//       <div className={classes.Person}>
//         <p onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p>{this.props.children}</p>
//         <input type="text" onChange={this.props.changed} value={this.props.name} />
//       </div>
//     );
//   }
// }

// export default Person;

// // functional component
// import React from "react";
// import classes from "./Person.module.scss";

// const person = props => {
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
