import React, { useEffect } from "react";
import classes from "./Cockpit.module.scss";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    setTimeout(() => {
      console.log("Saved data to cloud");
    }, 1000);

    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

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

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>THis is working </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;

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
