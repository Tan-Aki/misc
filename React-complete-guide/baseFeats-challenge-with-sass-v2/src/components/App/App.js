import React from "react";
import "./App.scss";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";
import Layout from "../Layout/layout";

class App extends React.Component {
  state = {
    username: "Toto"
  };

  usernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <UserInput userName={this.state.username} changed={this.usernameChangedHandler} />
          <UserOutput userName={this.state.username}>My hobbies : Racing</UserOutput>
          <UserOutput userName={"Tan"} />
        </Layout>
      </div>
    );
  }
}

export default App;
