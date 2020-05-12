import React, { Fragment, Component } from "react";
// import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  // doesnt have to a class component, it was just to show the component will update console log
  // componentWillUpdate = () => {
  //   console.log("Comoponent will update");
  // };

  //   {salad : 0,  bacon : 1, cheese : 0}

  //   const keys = Object.keys(ingredientsSummary);
  //   const values = Object.values(ingredientsSummary);

  //   const transformed = keys.map((ingredient, index) => {
  //     return (
  //       <li>
  //         {keys[index]} : {values[index]}
  //       </li>
  //     );
  //   });

  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey} </span> : {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p> A delicious burger with the following ingredients : </p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout ?</p>
      <p>
        <strong>Total Price : {props.price.toFixed(2)} $ </strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

// OrderSummary.propTypes = {};

export default OrderSummary;
