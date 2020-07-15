import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./List.module.scss";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <CSSTransition
        key={index}
        classNames={{
          enter: classes.FadeEnter,
          enterActive: classes.FadeEnterActive,
          exit: classes.FadeExit,
          exitActive: classes.FadeExitActive,

          // appear: classes["my-appear"],
          // appearActive: classes["my-active-appear"],
          // appearDone: classes["my-done-appear"],
          // enter: classes["my-enter"],
          // enterDone: classes["my-done-enter"],
          // exit: classes["my-exit"],
          // exitDone: classes["my-done-exit"],
        }}
        timeout={300}
      >
        <li className={classes.ListItem} onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        {/* <ul className={classes.List}>
                    {listItems}
                </ul> */}
        <TransitionGroup className={classes.List} component="ul">
            {/* TransitionGroup will manage the "in" property on  each CSSTransition item*/}
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
