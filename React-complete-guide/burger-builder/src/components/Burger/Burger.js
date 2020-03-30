import React, { useEffect } from "react";
import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  const sum = transformedIngredients.reduce((acc, el) => acc + el.length, 0);

  if (sum <= 0) {
    transformedIngredients = <p> Please add some ingredients </p>;
  }
  console.log(sum);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
