import React, { useReducer, useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import axios from "axios";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);

    default:
      break;
  }
};

// when working with reducers react will re-render the component whenever your reducer returns the new state
// reducers are nice to use if you have more complex state, or if multiple state values work together
//  or states that rely on the old state ( you don't have to use prevstate arg inside the setState function anymore)

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer } = useHttp();
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, isLoading, reqIdentifer, error]);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest(
      "https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json",
      "POST",
      JSON.stringify(ingredient),
      ingredient,
      "ADD_INGREDIENT"
    );
    // dispatchHttp({ type: "SEND" });
    // axios
    //   .post("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json", ingredient)
    //   .then((res) => {
    //     console.log(res.data.name);
    //     // setIsLoading(false);
    //     dispatchHttp({ type: "RESPONSE" });
    //     dispatch({ type: "ADD", ingredient: { id: res.data.name, ...ingredient } });
    //   })
    //   .catch((err) => {
    //     dispatchHttp({ type: "ERROR", errorMessage: err.message });
    //     // setError("Something went wrong ! : " + err.message);
    //     console.log("addIngredient error : ", err);
    //   });
  }, []);
  // useCallback "caches the function", it will not get recreated each time this component is re rendered,
  // so in this case, the ingredient form will not get  re rendered because this addingredient function will stay the same
  // ( and because the ingredientForm uses react.memo so it only gets re rendered if its props change, here, it doesnt change anymore thanks to useCallback)
  // no dependendy. the dispatch or setNewstate are garanteed by react to never change

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  // useCallback "caches the function", it will not get recreated each time this component is re rendered,
  // only the first time. We could have specified setUserIngredients as the dependency if we wanted, it would have been exactly the same in this particular case.

  const removeIngredientHandler = useCallback(
    (ingId) => {
      sendRequest(
        `https://react-hooks-update-e0a4c.firebaseio.com/ingredients/${ingId}.json`,
        "DELETE",
        null,
        ingId,
        "REMOVE_INGREDIENT"
      );

      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
    },
    [sendRequest] // will not change since we used "useCallback" on the sendRequest function in the custom http hook
  );

  const clearError = useCallback(() => {
    // was too lazy to do this.
    // see lecture 449 "using custom hook"
    // dispatchHttp({ type: "CLEAR" });
    // setIsLoading(false);
    // setError(null);
    // all state updated from the same synchronous event handler are batched together !!
    // after setNewState(), you cannot immediately use the new state in the same function unless you use the prevState argument
    // Both concepts (batching and when new state is available) behave in the same way for both functional components with hooks as well as class-based components with this.setState()!
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
};

export default Ingredients;

//////////////////////////////////////////////
// with reducers ( without custom hook)
//////////////////////////////////////////////

// import React, { useReducer, useState, useEffect, useCallback } from "react";

// import IngredientForm from "./IngredientForm";
// import IngredientList from "./IngredientList";
// import Search from "./Search";
// import axios from "axios";
// import ErrorModal from "../UI/ErrorModal";

// const httpReducer = (currHttpState, action) => {
//   switch (action.type) {
//     case "SEND":
//       return { loading: true, error: null };
//     case "RESPONSE":
//       return { ...currHttpState, loading: false };
//     case "ERROR":
//       return { loading: false, error: action.errorMessage };
//     case "CLEAR":
//       return { ...currHttpState, error: null };

//     default:
//       break;
//   }
// };

// const ingredientReducer = (currentIngredients, action) => {
//   switch (action.type) {
//     case "SET":
//       return action.ingredients;
//     case "ADD":
//       return [...currentIngredients, action.ingredient];
//     case "DELETE":
//       return currentIngredients.filter((ing) => ing.id !== action.id);

//     default:
//       break;
//   }
// };

// // when working with reducers react will re-render the component whenever your reducer returns the new state
// // reducers are nice to use if you have more complex state, or if multiple state values work together
// //  or states that rely on the old state ( you don't have to use prevstate arg inside the setState function anymore)

// const Ingredients = () => {
//   const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
//   const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
//   // const [userIngredients, setUserIngredients] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState();

//   const addIngredientHandler = useCallback((ingredient) => {
//     dispatchHttp({ type: "SEND" });

//     axios
//       .post("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json", ingredient)
//       .then((res) => {
//         console.log(res.data.name);
//         // setIsLoading(false);
//         dispatchHttp({ type: "RESPONSE" });
//         dispatch({ type: "ADD", ingredient: { id: res.data.name, ...ingredient } });
//       })
//       .catch((err) => {
//         dispatchHttp({ type: "ERROR", errorMessage: err.message });
//         // setError("Something went wrong ! : " + err.message);
//         console.log("addIngredient error : ", err);
//       });
//   }, []);
//   // useCallback "caches the function", it will not get recreated each time this component is re rendered,
//   // so in this case, the ingredient form will not get  re rendered because this addingredient function will stay the same
//   // ( and because the ingredientForm uses react.memo so it only gets re rendered if its props change, here, it doesnt change anymore thanks to useCallback)
//   // no dependendy. the dispatch or setNewstate are garanteed by react to never change

//   const filteredIngredientsHandler = useCallback((filteredIngredients) => {
//     // setUserIngredients(filteredIngredients);
//     dispatch({ type: "SET", ingredients: filteredIngredients });
//   }, []);

//   // useCallback "caches the function", it will not get recreated each time this component is re rendered,
//   // only the first time. We could have specified setUserIngredients as the dependency if we wanted, it would have been exactly the same in this particular case.

//   const removeIngredientHandler = useCallback((ingId) => {
//     // setIsLoading(true);
//     dispatchHttp({ type: "SEND" });

//     axios
//       .delete(`https://react-hooks-update-e0a4c.firebaseio.com/ingredients/${ingId}.json`)
//       .then(() => {
//         // setIsLoading(false);
//         dispatchHttp({ type: "RESPONSE" });

//         dispatch({ type: "DELETE", id: ingId });
//       })
//       .catch((err) => {
//         // setError("Something went wrong ! : " + err.message);
//         dispatchHttp({ type: "ERROR", errorMessage: err.message });

//         console.log("removeIngredient error : ", err.message);
//       });
//     // const filteredUserIngredients = userIngredients.filter((ing) => ing.id !== ingId);
//   }, []);

//   const clearError = useCallback(() => {
//     dispatchHttp({ type: "CLEAR" });

//     // setIsLoading(false);
//     // setError(null);
//     // all state updated from the same synchronous event handler are batched together !!
//     // after setNewState(), you cannot immediately use the new state in the same function unless you use the prevState argument
//     // Both concepts (batching and when new state is available) behave in the same way for both functional components with hooks as well as class-based components with this.setState()!
//   }, []);

//   return (
//     <div className="App">
//       {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
//       <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />

//       <section>
//         <Search onLoadIngredients={filteredIngredientsHandler} />
//         <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
//       </section>
//     </div>
//   );
// };

// export default Ingredients;

//////////////////////////////////////////////
// with useState instead of reducers
//////////////////////////////////////////////

// import React, { useState, useEffect, useCallback } from "react";

// import IngredientForm from "./IngredientForm";
// import IngredientList from "./IngredientList";
// import Search from "./Search";
// import axios from "axios";
// import ErrorModal from "../UI/ErrorModal";

// const Ingredients = () => {
//   const [userIngredients, setUserIngredients] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   // by default, useEffect gets executed right AFTER and for EVERY render of the component
//   // it acts like "componentdidupdate" except for the fact that CDU doesnt get executed at first render
//   // useEffect(() => {});

//   // with dependencies. Only when such a dependency changes (and thus after first render too because they didnt exist before that)
//   // , only then the function is executed
//   // with empty array, acts like "componentDidMount", meaning it's executed ONLY ONCE AFTER FIRST RENDER

//   // useEffect(() => {}, []);

//   // you can have a cleanup function inside your useEffect
//   // a function that will execute right before the next time the main function will get executed.
//   // doesnt get executed the first time the main useEffect is executed
//   // we kinda "clean up" the previous main useEffect before executing the next one
//   // useEffect(() => {
//   //   effect
//   //   return () => {
//   //     cleanup
//   //   }
//   // }, [input])

//   // if you have [] as a dependency, the cleanup function runs when the component gets unmounted

//   // can have as many useEffect as we want

//   // To make changes to the UI, React provides the useMutationEffect and useLayoutEffect hooks, which work the same as useEffect aside from when they are fired

//   // useEffect(() => {
//   //   axios
//   //     .get("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json")
//   //     .then((res) => {
//   //       console.log(res.data);
//   //       const loadedIngredients = [];
//   //       for (const key in res.data) {
//   //         if (res.data.hasOwnProperty(key)) {
//   //           loadedIngredients.push({
//   //             id: key,
//   //             title: res.data[key].title,
//   //             amount: res.data[key].amount,
//   //           });
//   //         }
//   //       }
//   //       console.log("loadedIngredients", loadedIngredients);
//   //       setUserIngredients(loadedIngredients);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // }, []);

//   // useEffect(() => {
//   //   console.log("rendering Ingredients", userIngredients);
//   // }, [userIngredients]);

//   // RIght now, since this component only get re rendered when we change userIngredients, the dependency is useless
//   // the useEffect will still be executed at every render of the component

//   const addIngredientHandler = (ingredient) => {
//     setIsLoading(true);

//     axios
//       .post("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json", ingredient)
//       .then((res) => {
//         console.log(res.data.name);
//         setIsLoading(false);
//         setUserIngredients((prevIngredients) => [
//           ...prevIngredients,
//           { id: res.data.name, ...ingredient },
//         ]);
//       })
//       .catch((err) => {
//         setError("Something went wrong ! : " + err.message);
//         console.log("addIngredient error : ", err);
//       });
//   };

//   const filteredIngredientsHandler = useCallback((filteredIngredients) => {
//     setUserIngredients(filteredIngredients);
//   }, []);
//   // useCallback "caches the function", it will not get recreated each time this component is re rendered,
//   // only the first time. We could have specified setUserIngredients as the dependency if we wanted, it would have been exactly the same in this particular case.

//   const removeIngredientHandler = (ingId) => {
//     setIsLoading(true);
//     axios
//       .delete(`https://react-hooks-update-e0a4c.firebaseio.com/ingredients/${ingId}.jon`)
//       .then(() => {
//         setIsLoading(false);
//         setUserIngredients((prevIngredients) => {
//           return prevIngredients.filter((ing) => ing.id !== ingId);
//         });
//       })
//       .catch((err) => {
//         setError("Something went wrong ! : " + err.message);
//         console.log("removeIngredient error : ", err.message);
//       });
//     // const filteredUserIngredients = userIngredients.filter((ing) => ing.id !== ingId);
//   };

//   const clearError = () => {
//     setIsLoading(false);
//     setError(null);
//     // all state updated from the same synchronous event handler are batched together !!
//     // after setNewState(), you cannot immediately use the new state in the same function unless you use the prevState argument
//     // Both concepts (batching and when new state is available) behave in the same way for both functional components with hooks as well as class-based components with this.setState()!
//   };

//   return (
//     <div className="App">
//       {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
//       <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

//       <section>
//         <Search onLoadIngredients={filteredIngredientsHandler} />
//         <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
//       </section>
//     </div>
//   );
// };

// export default Ingredients;
