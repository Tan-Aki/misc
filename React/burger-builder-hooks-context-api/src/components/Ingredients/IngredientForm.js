import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // const [inputState, setInputState] = useState({
  //   title: "",
  //   amount: "",
  // });

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  console.log("rendering FORM");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // value={inputState.title}
              value={enteredTitle}
              onChange={(event) => {
                // const newTitle = event.target.value;
                // setInputState((prevInputState) => ({
                //   // ...prevInputState,
                //   title: newTitle,
                //   amount: prevInputState.amount,
                // }));
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // value={inputState.amount}
              value={enteredAmount}
              onChange={(event) => {
                // const newAmount = event.target.value;
                // setInputState((prevInputState) => ({
                //   // ...prevInputState,
                //   amount: newAmount,
                //   title: prevInputState.title,
                // }));
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
            {/* 
            equivalent to :
            {props.loading ? <LoadingIndicator /> : null} 
            */}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
