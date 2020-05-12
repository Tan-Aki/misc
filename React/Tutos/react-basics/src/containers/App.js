import React, { Component, Fragment } from "react";
import classes from "./App.module.scss";
import Button from "../components/Button/Button";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

import withClass from "../hoc/withClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "asds1", name: "Tanneguy!!", age: 30 },
        { id: "asds2", name: "Sub", age: 29 },
        { id: "asds3", name: "Rota", age: 26 }
      ],
      otherValue: "some other value",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    };
    this.props = props;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // UNSAFE_componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Fragment>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{ authenticated: this.state.authenticated, login: this.loginHandler }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
          <Button />
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);

// //  prop chain problem. without context API

// import React, { Component, Fragment } from "react";
// import classes from "./App.module.scss";
// import Button from "../components/Button/Button";
// import Persons from "../components/Persons/Persons";
// import Cockpit from "../components/Cockpit/Cockpit";

// import withClass from "../hoc/withClass";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("[App.js] constructor");
//     this.state = {
//       persons: [
//         { id: "asds1", name: "Tanneguy!!", age: 30 },
//         { id: "asds2", name: "Sub", age: 29 },
//         { id: "asds3", name: "Rota", age: 26 }
//       ],
//       otherValue: "some other value",
//       showPersons: false,
//       showCockpit: true,
//       changeCounter: 0,
//       authenticated: false
//     };
//     this.props = props;
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("[App.js] getDerivedStateFromProps", props);
//     return state;
//   }

//   // UNSAFE_componentWillMount() {
//   //   console.log("[App.js] componentWillMount");
//   // }

//   componentDidMount() {
//     console.log("[App.js] componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[App.js] shouldComponentUpdate");
//     return true;
//   }
//   componentDidUpdate() {
//     console.log("[App.js] componentDidUpdate");
//   }

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];

//     persons.splice(personIndex, 1);

//     this.setState({ persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState((prevState, props) => {
//       return { persons, changeCounter: prevState.changeCounter + 1 };
//     });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   loginHandler = () => {
//     this.setState({ authenticated: true });
//   };
//   render() {
//     console.log("[App.js] render");

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <Persons
//           persons={this.state.persons}
//           clicked={this.deletePersonHandler}
//           changed={this.nameChangedHandler}
//           isAuthenticated={this.state.authenticated}
//         />
//       );
//     }

//     return (
//       <Fragment>
//         <button
//           onClick={() => {
//             this.setState({ showCockpit: false });
//           }}
//         >
//           Remove Cockpit
//         </button>
//         {this.state.showCockpit ? (
//           <Cockpit
//             title={this.props.appTitle}
//             showPersons={this.state.showPersons}
//             personsLength={this.state.persons.length}
//             clicked={this.togglePersonsHandler}
//             login={this.loginHandler}
//           />
//         ) : null}
//         {persons}
//         <Button />
//       </Fragment>
//     );
//   }
// }

// export default withClass(App, classes.App);

// // With HOC WithClass
// import React, { Component } from "react";
// import classes from "./App.module.scss";
// import Button from "../components/Button/Button";
// import Persons from "../components/Persons/Persons";
// import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("[App.js] constructor");
//     this.state = {
//       persons: [
//         { id: "asds1", name: "Tanneguy!!", age: 30 },
//         { id: "asds2", name: "Sub", age: 29 },
//         { id: "asds3", name: "Rota", age: 26 }
//       ],
//       otherValue: "some other value",
//       showPersons: false,
//       showCockpit: true
//     };
//     this.props = props;
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("[App.js] getDerivedStateFromProps", props);
//     return state;
//   }

//   // UNSAFE_componentWillMount() {
//   //   console.log("[App.js] componentWillMount");
//   // }

//   componentDidMount() {
//     console.log("[App.js] componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[App.js] shouldComponentUpdate");
//     return true;
//   }
//   componentDidUpdate() {
//     console.log("[App.js] componentDidUpdate");
//   }

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];

//     persons.splice(personIndex, 1);

//     this.setState({ persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     console.log("[App.js] render");

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <Persons
//           persons={this.state.persons}
//           clicked={this.deletePersonHandler}
//           changed={this.nameChangedHandler}
//         />
//       );
//     }

//     return (
//       <WithClass classes={classes.App}>
//         <button
//           onClick={() => {
//             this.setState({ showCockpit: false });
//           }}
//         >
//           Remove Cockpit
//         </button>
//         {this.state.showCockpit ? (
//           <Cockpit
//             title={this.props.appTitle}
//             showPersons={this.state.showPersons}
//             personsLength={this.state.persons.length}
//             clicked={this.togglePersonsHandler}
//           />
//         ) : null}
//         {persons}
//         <Button />
//       </WithClass>
//     );
//   }
// }

// export default App;

// // with ES7 syntax without constructor

// import React, { Component } from "react";
// import classes from "./App.module.scss";
// import Button from "../components/Button/Button";
// import Persons from "../components/Persons/Persons";
// import Cockpit from "../components/Cockpit/Cockpit";

// class App extends Component {
//   state = {
//     persons: [
//       { id: "asds1", name: "Tanneguy!!", age: 30 },
//       { id: "asds2", name: "Sub", age: 29 },
//       { id: "asds3", name: "Rota", age: 26 }
//     ],
//     otherValue: "some other value",
//     showPersons: false
//   };

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];

//     persons.splice(personIndex, 1);

//     this.setState({ persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <Persons
//           persons={this.state.persons}
//           clicked={this.deletePersonHandler}
//           changed={this.nameChangedHandler}
//         />
//       );
//     }

//     return (
//       <div classes={classes.App}>
//         <Cockpit
//           title={this.props.appTitle}
//           showPersons={this.state.showPersons}
//           persons={this.state.persons}
//           clicked={this.togglePersonsHandler}
//         />
//         {persons}
//         <Button />
//       </div>
//     );
//   }
// }

// export default App;

// // before splitting into multiple components
// import React, { Component } from "react";
// import classes from "./App.module.scss";
// import Person from "./Person/Person";
// import Button from "./Button/button";

// class App extends Component {
//   state = {
//     persons: [
//       { id: "asds1", name: "Tanneguy!!", age: 30 },
//       { id: "asds2", name: "Sub", age: 29 },
//       { id: "asds3", name: "Rota", age: 26 }
//     ],
//     otherValue: "some other value",
//     showPersons: false
//   };

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];

//     persons.splice(personIndex, 1);

//     this.setState({ persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     let persons = null;
//     let btnClass = [classes.Btn];

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => {
//                   this.nameChangedHandler(event, person.id);
//                 }}
//               />
//             );
//           })}
//         </div>
//       );

//       btnClass.push(classes.Red);
//     }

//     const assignedClasses = [];

//     if (this.state.persons.length <= 2) {
//       assignedClasses.push(classes.Red);
//     }

//     if (this.state.persons.length <= 1) {
//       assignedClasses.push(classes.Bold);
//     }

//     return (
//       <div className={classes.App}>
//         <h1>Hi, I'm a react App</h1>
//         <p className={assignedClasses.join(" ")}>THis is working </p>
//         <button className={btnClass.join(" ")} onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </button>
//         <Button />
//         {persons}
//       </div>
//     );
//   }
// }

// export default App;

// // ErrorBoundary

// import React, { Component } from "react";
// import classes from "./App.module.scss";
// import Person from "./Person/Person";
// import Button from "./Button/button";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// class App extends Component {
//   state = {
//     persons: [
//       { id: "asds1", name: "Tanneguy!!", age: 30 },
//       { id: "asds2", name: "Sub", age: 29 },
//       { id: "asds3", name: "Rota", age: 26 }
//     ],
//     otherValue: "some other value",
//     showPersons: false
//   };

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];

//     persons.splice(personIndex, 1);

//     this.setState({ persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     let persons = null;
//     let btnClass = [classes.Btn];

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <ErrorBoundary key={person.id}>
//                 <Person
//                   click={() => this.deletePersonHandler(index)}
//                   name={person.name}
//                   age={person.age}
//                   changed={event => {
//                     this.nameChangedHandler(event, person.id);
//                   }}
//                 />
//               </ErrorBoundary>
//             );
//           })}
//         </div>
//       );

//       btnClass.push(classes.Red);
//     }

//     const assignedClasses = [];

//     if (this.state.persons.length <= 2) {
//       assignedClasses.push(classes.Red);
//     }

//     if (this.state.persons.length <= 1) {
//       assignedClasses.push(classes.Bold);
//     }

//     return (
//       <div className={classes.App}>
//         <h1>Hi, I'm a react App</h1>
//         <p className={assignedClasses.join(" ")}>THis is working </p>
//         <button className={btnClass.join(" ")} onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </button>
//         <Button />
//         {persons}
//       </div>
//     );
//   }
// }

// export default App;

// // class based component
// // styled components, radium, inline styles, dynamic styles and classnames, dynamic lists and conditionnals

// import React, { Component } from "react";
// // import styled from "styled-components";
// import "./App.css";
// import Person from "./Person/Person";
// // import Radium, { StyleRoot } from "radium";

// // const StyledButton = styled.button`
// //   background-color: ${props => (props.alt ? "red" : "green")};
// //   color: white;
// //   font: inherit;
// //   border: 1x solid blue;
// //   padding: 8px;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
// //     color: black;
// //   }
// // `;

// class App extends Component {
//   //if state changes, it will lead react to re render the dom element

//   // in ES7, we don't need the constructor anymore, the constructor will be created for us with babel.
//   //et en même temps, comme tu utilises des arrow functions, t'as plus besoin de binder le this de tes handler dans un constructeur

//   state = {
//     persons: [
//       { id: "asds1", name: "Tanneguy!!", age: 30 },
//       { id: "asds2", name: "Sub", age: 29 },
//       { id: "asds3", name: "Rota", age: 26 }
//     ],
//     otherValue: "some other value",
//     showPersons: false
//   };

//   // switchNameHandler = newName => {
//   //   // console.log('Was clicked');
//   //   // dont do this !!   this.state.persons[0].name = 'Max';

//   //   // arrow function, the this will allways refer to the parent enclosing lexical scope.
//   //   // so here the instance of App

//   //   this.setState({
//   //     persons: [
//   //       { name: newName, age: 30 },
//   //       { name: "Sub", age: 29 },
//   //       { name: "Rota", age: 28 }
//   //     ]
//   //   });
//   // };

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];
//     // in order to update state in an immutable fashion
//     // instead of const persons = this.state.persons;

//     // we could also do it like that : const persons = this.state.persons.splice();

//     persons.splice(personIndex, 1);
//     this.setState({ persons });
//     // this.setState({ persons: persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = { ...this.state.persons[personIndex] };
//     // const person = Object.assign({}, this.state.persons[personIndex]);

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     // const style = {
//     //   backgroundColor: "green",
//     //   color: "white",
//     //   font: "inherit",
//     //   border: "1x solid blue",
//     //   padding: "8px",
//     //   cursor: "pointer"
//     //   // // Radium
//     //   // ":hover": {
//     //   //   backgroundColor: "lightgreen",
//     //   //   color: "black"
//     //   // }
//     // };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => {
//                   this.nameChangedHandler(event, person.id);
//                 }}
//               />
//             );
//           })}
//           {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler.bind(this, "Tan!")}
//             // here we use bind not to bind the this(switchNameHandler is an arrow function so its this can never be redefined) but to bind the argument "Tan!"
//             // we use bind because it allows us to pass a reference to the function, not firing it right away doing this.switchNameHandler("Tan!")
//             // we can also use the below syntax, but it's less performant
//             // click={ () => {this.switchNameHandler("Tan!")}}
//             changed={this.nameChangedHandler}
//           >
//             My hobbies : Racing
//           </Person>
//           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
//         </div>
//       );

//       // style.backgroundColor = "red";
//       // // // Radium
//       // // style[":hover"] = {
//       // //   backgroundColor: "salmon",
//       // //   color: "black"
//       // // };
//     }

//     const classes = [];

//     if (this.state.persons.length <= 2) {
//       classes.push("red");
//     }

//     if (this.state.persons.length <= 1) {
//       classes.push("bold");
//     }

//     return (
//       // <StyleRoot>
//       <div className="App">
//         <h1>Hi, I'm a react App</h1>
//         <p className={classes.join(" ")}>THis is working </p>
//         {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </StyledButton> */}
//         <button /* style={style} */ className="button" onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </button>
//         {persons}
//       </div>
//       // </StyleRoot>
//     );

//     // this is what gets executed behind the scenes
//     // return React.createElement(
//     // 	'div',
//     // 	{ className: 'App' },
//     // 	React.createElement('h1', null, 'Does this work now ?')
//     // );
//   }
// }

// export default App;
// // export default Radium(App);
// //Radium for pseudo selectors and media queries inside styled components

// // base base

// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Tan",
//         age: 30
//       },
//       {
//         name: "Sub",
//         age: 29
//       },
//       {
//         name: "Rota",
//         age: 26
//       }
//     ]
//   });

//   const [otherState, setOtherState] = useState("some other value");
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // dont do this !!   this.state.persons[0].name = 'Max';
//     setPersonsState({
//       persons: [
//         {
//           name: "Tanneguy",
//           age: 30
//         },
//         {
//           name: "Sub",
//           age: 29
//         },
//         {
//           name: "Rota",
//           age: 28
//         }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a react App</h1>
//       <p>THis is working </p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My hobbies : Racing
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );

//   // this is what gets executed behind the scenes
//   // return React.createElement(
//   // 	'div',
//   // 	{ className: 'App' },
//   // 	React.createElement('h1', null, 'Does this work now ?')
//   // );
// };

// export default app;
