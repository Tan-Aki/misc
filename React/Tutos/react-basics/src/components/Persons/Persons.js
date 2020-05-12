import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // UNSAFE_componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.isAuthenticated !== this.props.isAuthenticated
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot  ! " };
  }

  // UNSAFE_componentWillUpdate() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] render...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => {
            this.props.changed(event, person.id);
          }}
        />
      );
    });
  }
}

export default Persons;

// //  prop chain problem. without context API
// import React, { Component, PureComponent } from "react";
// import Person from "./Person/Person";

// class Persons extends PureComponent {
//   // static getDerivedStateFromProps(props, state) {
//   //   console.log("[Persons.js] getDerivedStateFromProps");
//   //   return state;
//   // }

//   // UNSAFE_componentWillReceiveProps(props) {
//   //   console.log("[Persons.js] componentWillReceiveProps", props);
//   // }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log("[Persons.js] shouldComponentUpdate");
//   //   if (
//   //     nextProps.persons !== this.props.persons ||
//   //     nextProps.changed !== this.props.changed ||
//   //     nextProps.clicked !== this.props.clicked ||
//   //     nextProps.isAuthenticated !== this.props.isAuthenticated
//   //   ) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("[Persons.js] getSnapshotBeforeUpdate");
//     return { message: "snapshot  ! " };
//   }

//   // UNSAFE_componentWillUpdate() {}

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("[Persons.js] componentDidUpdate");
//     console.log(snapshot);
//   }

//   componentWillUnmount() {
//     console.log("[Persons.js] componentWillUnmount");
//   }

//   render() {
//     console.log("[Persons.js] render...");
//     return this.props.persons.map((person, index) => {
//       return (
//         <Person
//           click={() => this.props.clicked(index)}
//           name={person.name}
//           age={person.age}
//           key={person.id}
//           changed={event => {
//             this.props.changed(event, person.id);
//           }}
//           isAuth={this.props.isAuthenticated}
//         />
//       );
//     });
//   }
// }

// export default Persons;

// // component with lifecyle hooks and checking if all property changed before updating
// import React, { Component } from "react";
// import Person from "./Person/Person";

// class Persons extends Component {
//   // static getDerivedStateFromProps(props, state) {
//   //   console.log("[Persons.js] getDerivedStateFromProps");
//   //   return state;
//   // }

//   // UNSAFE_componentWillReceiveProps(props) {
//   //   console.log("[Persons.js] componentWillReceiveProps", props);
//   // }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[Persons.js] shouldComponentUpdate");
//     if (
//       nextProps.persons !== this.props.persons ||
//       nextProps.changed !== this.props.changed ||
//       nextProps.clicked !== this.props.clicked
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("[Persons.js] getSnapshotBeforeUpdate");
//     return { message: "snapshot  ! " };
//   }

//   // UNSAFE_componentWillUpdate() {}

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("[Persons.js] componentDidUpdate");
//     console.log(snapshot);
//   }

//   componentWillUnmount() {
//     console.log("[Persons.js] componentWillUnmount");
//   }

//   render() {
//     console.log("[Persons.js] render...");
//     return this.props.persons.map((person, index) => {
//       return (
//         <Person
//           click={() => this.props.clicked(index)}
//           name={person.name}
//           age={person.age}
//           key={person.id}
//           changed={event => {
//             this.props.changed(event, person.id);
//           }}
//         />
//       );
//     });
//   }
// }

// export default Persons;

// // functionnal component with console.log
// import React from "react";
// import Person from "./Person/Person";

// const persons = props => {
//   console.log("[Persons.js] render...");
//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={event => {
//           props.changed(event, person.id);
//         }}
//       />
//     );
//   });
// };

// export default persons;

// // functional component
// import React from "react";
// import Person from "./Person/Person";

// const persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={event => {
//           props.changed(event, person.id);
//         }}
//       />
//     );
//   });

// export default persons;
