// class based component

import React, { Component } from "react";
// import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1x solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

class App extends Component {
  //if state changes, it will lead react to re render the dom element

  // in ES7, we don't need the constructor anymore, the constructor will be created for us with babel.
  //et en même temps, comme tu utilises des arrow functions, t'as plus besoin de binder le this de tes handler dans un constructeur

  state = {
    persons: [
      { id: "asds1", name: "Tanneguy!!", age: 30 },
      { id: "asds2", name: "Sub", age: 29 },
      { id: "asds3", name: "Rota", age: 26 }
    ],
    otherValue: "some other value",
    showPersons: false
  };

  // switchNameHandler = newName => {
  //   // console.log('Was clicked');
  //   // dont do this !!   this.state.persons[0].name = 'Max';

  //   // arrow function, the this will allways refer to the parent enclosing lexical scope.
  //   // so here the instance of App

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: "Sub", age: 29 },
  //       { name: "Rota", age: 28 }
  //     ]
  //   });
  // };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    // in order to update state in an immutable fashion
    // instead of const persons = this.state.persons;

    // we could also do it like that : const persons = this.state.persons.splice();

    persons.splice(personIndex, 1);
    this.setState({ persons });
    // this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1x solid blue",
    //   padding: "8px",
    //   cursor: "pointer"
    //   // // Radium
    //   // ":hover": {
    //   //   backgroundColor: "lightgreen",
    //   //   color: "black"
    //   // }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => {
                  this.nameChangedHandler(event, person.id);
                }}
              />
            );
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Tan!")}
            // here we use bind not to bind the this(switchNameHandler is an arrow function so its this can never be redefined) but to bind the argument "Tan!"
            // we use bind because it allows us to pass a reference to the function, not firing it right away doing this.switchNameHandler("Tan!")
            // we can also use the below syntax, but it's less performant
            // click={ () => {this.switchNameHandler("Tan!")}}
            changed={this.nameChangedHandler}
          >
            My hobbies : Racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );

      // style.backgroundColor = "red";
      // // // Radium
      // // style[":hover"] = {
      // //   backgroundColor: "salmon",
      // //   color: "black"
      // // };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p className={classes.join(" ")}>THis is working </p>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton> */}
        <button /* style={style} */ className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );

    // this is what gets executed behind the scenes
    // return React.createElement(
    // 	'div',
    // 	{ className: 'App' },
    // 	React.createElement('h1', null, 'Does this work now ?')
    // );
  }
}

export default App;
// export default Radium(App);
//Radium for pseudo selectors and media queries inside styled components

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
