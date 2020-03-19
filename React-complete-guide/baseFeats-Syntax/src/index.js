import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// 1. Functional components (also referred to as "presentational", "dumb" or
// "stateless" components - more about this later in the course) =>
// const cmp = () => { return <div>some JSX</div> }
// (using ES6 arrow functions as shown here is recommended but optional)

// 2. class-based components (also referred to as "containers", "smart" or "stateful"
// components) =>
// class Cmp extends Component { render () { return <div>some JSX</div> } }
