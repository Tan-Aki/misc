import React from "react";
import PropTypes from "prop-types";
import classes from "./Order.module.scss";

const order = (props) => {
  console.log("props.ingredients", props.ingredients);
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

// import React from "react";

// import classes from "./Order.module.scss";

// const order = (props) => {
//   const ingredients = [];

//   for (let ingredientName in props.ingredients) {
//     ingredients.push({
//       name: ingredientName,
//       amount: props.ingredients[ingredientName],
//     });
//   }

//   const ingredientOutput = ingredients.map((ig) => {
//     return (
//       <span
//         style={{
//           textTransform: "capitalize",
//           display: "inline-block",
//           margin: "0 8px",
//           border: "1px solid #ccc",
//           padding: "5px",
//         }}
//         key={ig.name}
//       >
//         {ig.name} ({ig.amount})
//       </span>
//     );
//   });

//   return (
//     <div className={classes.Order}>
//       <p>Ingredients: {ingredientOutput}</p>
//       <p>
//         Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
//       </p>
//     </div>
//   );
// };

// export default order;
