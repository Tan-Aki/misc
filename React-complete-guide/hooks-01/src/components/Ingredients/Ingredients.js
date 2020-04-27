import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import axios from "axios";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // by default, useEffect gets executed right AFTER and for EVERY render of the component
  // it acts like "componentdidupdate" except for the fact that CDU doesnt get executed at first render
  // useEffect(() => {});

  // with dependencies. Only when such a dependency changes, only then the function is executed
  // with empty array, acts like "componentDidMount", meaning it's executed ONLY ONCE AT FIRST RENDER
  // useEffect(() => {}, []);

  // can have as many useEffect as we want

  useEffect(() => {
    axios
      .get("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json")
      .then((res) => {
        console.log(res.data);
        const loadedIngredients = [];
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            loadedIngredients.push({
              id: key,
              title: res.data[key].title,
              amount: res.data[key].amount,
            });
          }
        }
        console.log("loadedIngredients", loadedIngredients);
        setUserIngredients(loadedIngredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("rendering Ingredients", userIngredients);
  }, [userIngredients]);

  // RIght now, since this component only get re rendered when we change userIngredients, the dependency is useless
  // it will still be executed at every render of the component

  const addIngredientHandler = (ingredient) => {
    axios
      .post("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json", ingredient)
      .then((res) => {
        console.log(res.data.name);
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: res.data.name, ...ingredient },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredIngredientsHandler = (filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  };

  const removeIngredientHandler = (ingId) => {
    // const filteredUserIngredients = userIngredients.filter((ing) => ing.id !== ingId);
    setUserIngredients((prevIngredients) => {
      return prevIngredients.filter((ing) => ing.id !== ingId);
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
