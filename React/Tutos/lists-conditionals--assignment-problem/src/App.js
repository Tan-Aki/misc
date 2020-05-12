import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    text: ""
  };

  inputChangedHandler = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  deleteCharHandler = charIndex => {
    const textArr = this.state.text.split("");

    textArr.splice(charIndex, 1);

    const text = textArr.join("");
    this.setState({ text });
  };

  render() {
    let characters = null;

    characters = (
      <div>
        {this.state.text.split("").map((char, index) => {
          return <Char click={() => this.deleteCharHandler(index)} value={char} key={index} />;
        })}
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.text}
          onChange={event => {
            this.inputChangedHandler(event);
          }}
        />
        <p>{this.state.text.length}</p>
        <Validation text={this.state.text} />
        {characters}
      </div>
    );
  }
}

export default App;
