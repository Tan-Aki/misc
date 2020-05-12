import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.scss";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  let validationError = null;

  if (!props.valid && props.touched) {
    inputClasses.push(classes.Invalid);
    validationError = <p className={classes.ValidationError}>Please enter a valid value!</p>;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      let options = props.elementConfig.options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        );
      });
      inputElement = (
        <select className={inputClasses.join(" ")} value={props.value} onChange={props.changed}>
          {options}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}> {props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

input.propTypes = {};

export default input;
