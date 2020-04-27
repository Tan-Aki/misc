import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import axios from "axios";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    const query = enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`;
    axios
      .get("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json" + query)
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
        // onLoadIngredients(loadedIngredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [enteredFilter, onLoadIngredients]);
  // since are relying on props in the effect  we have to specify as dependency.
  // doesnt make a lot of sens but that's how it is

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
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
