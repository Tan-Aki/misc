import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserInput></UserInput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
