import React from "react";
import PropTypes from "prop-types";
import classes from "./Order.module.scss";

const order = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <span
        key={igKey}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {igKey} : {props.ingredients[igKey]}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientsSummary}</p>
      <p>
        Price: <strong> USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

order.propTypes = {};

export default order;
