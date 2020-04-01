import React, { Fragment } from "react";
// import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey} </span> : {props.ingredients[igKey]}
      </li>
    );
  });

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

// orderSummary.propTypes = {};

export default orderSummary;
