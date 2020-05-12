import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.scss";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    setTimeout(() => {
      console.log("Saved data to cloud");
    }, 1000);

    toggleBtnRef.current.click();

    return () => {
      // this will be executed after the component unmounts, if the [] was specified
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // the [] speficies that useEffect will execute the main fonction after only the first render.
  // you can pass [props.persons] for exemple, to have it triggered only when props.persons is changed ( when the persons array is updated inside the state of app.js)
  // default is it will be triggered after every render()

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>THis is working </p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}> Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);

// // without useContext Hook
// import React, { useEffect, useRef } from "react";
// import classes from "./Cockpit.module.scss";
// import AuthContext from "../../context/auth-context";

// const Cockpit = props => {
//   const toggleBtnRef = useRef(null);

//   useEffect(() => {
//     console.log("[Cockpit.js] useEffect");

//     setTimeout(() => {
//       console.log("Saved data to cloud");
//     }, 1000);

//     toggleBtnRef.current.click();

//     return () => {
//       // this will be executed after the component unmounts, if the [] was specified
//       console.log("[Cockpit.js] cleanup work in useEffect");
//     };
//   }, []); // the [] speficies that useEffect will execute the main fonction after only the first render.
//   // you can pass [props.persons] for exemple, to have it triggered only when props.persons is changed ( when the persons array is updated inside the state of app.js)
//   // default is it will be triggered after every render()

//   useEffect(() => {
//     console.log("[Cockpit.js] 2nd useEffect");
//     return () => {
//       console.log("[Cockpit.js] cleanup work in 2nd useEffect");
//     };
//   });

//   const assignedClasses = [];
//   let btnClass = "";

//   if (props.showPersons) {
//     btnClass = classes.Red;
//   }

//   if (props.personsLength <= 2) {
//     assignedClasses.push(classes.Red);
//   }

//   if (props.personsLength <= 1) {
//     assignedClasses.push(classes.Bold);
//   }

//   return (
//     <div className={classes.Cockpit}>
//       <h1>{props.title}</h1>
//       <p className={assignedClasses.join(" ")}>THis is working </p>
//       <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
//         Toggle Persons
//       </button>
//       <AuthContext.Consumer>
//         {context => <button onClick={context.login}> Log in</button>}
//       </AuthContext.Consumer>
//     </div>
//   );
// };

// export default React.memo(Cockpit);

// //  prop chain problem. without context API

// import React, { useEffect, useRef } from "react";
// import classes from "./Cockpit.module.scss";

// const Cockpit = props => {
//   const toggleBtnRef = useRef(null);

//   useEffect(() => {
//     console.log("[Cockpit.js] useEffect");

//     setTimeout(() => {
//       console.log("Saved data to cloud");
//     }, 1000);

//     toggleBtnRef.current.click();

//     return () => {
//       // this will be executed when the component unmounts, if the [] was specified
//       console.log("[Cockpit.js] cleanup work in useEffect");
//     };
//   }, []); // the [] will do it only for the first render.
//   // you can pass [props.persons] for exemple, to have it triggered only when props.persons is changed ( when the persons array is updated inside the state of app.js)
//   // default is it will be triggered at every render()

//   useEffect(() => {
//     console.log("[Cockpit.js] 2nd useEffect");
//     return () => {
//       console.log("[Cockpit.js] cleanup work in 2nd useEffect");
//     };
//   });

//   const assignedClasses = [];
//   let btnClass = "";

//   if (props.showPersons) {
//     btnClass = classes.Red;
//   }

//   if (props.personsLength <= 2) {
//     assignedClasses.push(classes.Red);
//   }

//   if (props.personsLength <= 1) {
//     assignedClasses.push(classes.Bold);
//   }

//   return (
//     <div className={classes.Cockpit}>
//       <h1>{props.title}</h1>
//       <p className={assignedClasses.join(" ")}>THis is working </p>
//       <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
//         Toggle Persons
//       </button>
//       <button onClick={props.login}> Log in</button>
//     </div>
//   );
// };

// export default React.memo(Cockpit);

// // functional component
// import React from "react";
// import classes from "./Cockpit.module.scss";

// const cockpit = props => {
//   const assignedClasses = [];
//   let btnClass = "";

//   if (props.showPersons) {
//     btnClass = classes.Red;
//   }

//   if (props.persons.length <= 2) {
//     assignedClasses.push(classes.Red);
//   }

//   if (props.persons.length <= 1) {
//     assignedClasses.push(classes.Bold);
//   }

//   return (
//     <div className={classes.Cockpit}>
//       <h1>{props.title}</h1>
//       <p className={assignedClasses.join(" ")}>THis is working </p>
//       <button className={btnClass} onClick={props.clicked}>
//         Toggle Persons
//       </button>
//     </div>
//   );
// };

// export default cockpit;
