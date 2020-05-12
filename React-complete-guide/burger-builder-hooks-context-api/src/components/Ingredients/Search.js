import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import axios from "axios";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        // The value enteredFilter is enclosed in the component function itself (which is called on each render cycle)
        // it's the "old value", the value that existed at the moment of the call of setTimeout
        // the value inputRef.current.value is the exact value inside the input. The "ever fresh" value
        const query =
          enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`;
        axios
          .get("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json" + query)
          .then((res) => {
            console.log("from search : ", res.data);
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
            onLoadIngredients(loadedIngredients);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients, inputRef]);
  // we always need to add the external variables we are using inside a useEffect  as dependencies. THat's how it is.
  // 1. since are relying on props in the effect  we have to specify onLoadIngredients as dependency.
  // doesnt make a lot of sense but that's how it is and creates infinite loop that we can prevent with "usecallback" in the ingredients component
  // 2. for the inputRef
  // Indeed refs are managed internally such that they never change (the ref object I mean, not the value stored under .current). That's why this dependency will never change too.

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
