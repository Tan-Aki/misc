import React, { useReducer, useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import axios from "axios";
import ErrorModal from "../UI/ErrorModal";

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

// when working with reducersm react will re-render the component whenever your reducer returns the new state

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // by default, useEffect gets executed right AFTER and for EVERY render of the component
  // it acts like "componentdidupdate" except for the fact that CDU doesnt get executed at first render
  // useEffect(() => {});

  // with dependencies. Only when such a dependency changes (and thus at first render too because they didnt exist before that)
  // , only then the function is executed
  // with empty array, acts like "componentDidMount", meaning it's executed ONLY ONCE AT FIRST RENDER

  // useEffect(() => {}, []);

  // you can have a cleanup function inside your useEffect
  // a function that will execute right before the next time the main function will get executed.
  // doesnt get executed the first time the main useEffect is executed
  // we kinda "clean up" the previous main useEffect before executing the next one
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // if you have [] as a dependency, the cleanup function runs when the component gets unmounted

  // can have as many useEffect as we want

  // useEffect(() => {
  //   axios
  //     .get("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json")
  //     .then((res) => {
  //       console.log(res.data);
  //       const loadedIngredients = [];
  //       for (const key in res.data) {
  //         if (res.data.hasOwnProperty(key)) {
  //           loadedIngredients.push({
  //             id: key,
  //             title: res.data[key].title,
  //             amount: res.data[key].amount,
  //           });
  //         }
  //       }
  //       console.log("loadedIngredients", loadedIngredients);
  //       setUserIngredients(loadedIngredients);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("rendering Ingredients", userIngredients);
  // }, [userIngredients]);

  // RIght now, since this component only get re rendered when we change userIngredients, the dependency is useless
  // the useEffect will still be executed at every render of the component

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);

    axios
      .post("https://react-hooks-update-e0a4c.firebaseio.com/ingredients.json", ingredient)
      .then((res) => {
        console.log(res.data.name);
        setIsLoading(false);
        dispatch({ type: "ADD", ingredient: { id: res.data.name, ...ingredient } });
      })
      .catch((err) => {
        setError("Something went wrong ! : " + err.message);
        console.log("addIngredient error : ", err);
      });
  };

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  // useCallback "caches the function", it will not get recreated each time this component is re rendered,
  // only the first time. We could have specified setUserIngredients as the dependency if we wanted, it would have been exactly the same in this particular case.

  const removeIngredientHandler = (ingId) => {
    setIsLoading(true);
    axios
      .delete(`https://react-hooks-update-e0a4c.firebaseio.com/ingredients/${ingId}.json`)
      .then(() => {
        setIsLoading(false);
        dispatch({ type: "DELETE", id: ingId });
      })
      .catch((err) => {
        setError("Something went wrong ! : " + err.message);
        console.log("removeIngredient error : ", err.message);
      });
    // const filteredUserIngredients = userIngredients.filter((ing) => ing.id !== ingId);
  };

  const clearError = () => {
    setIsLoading(false);
    setError(null);
    // all state updated from the same synchronous event handler are batched together !!
    // after setNewState(), you cannot immediately use the new state in the same function unless you use the prevState argument
    // Both concepts (batching and when new state is available) behave in the same way for both functional components with hooks as well as class-based components with this.setState()!
  };

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

// with useState

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

//   // with dependencies. Only when such a dependency changes (and thus at first render too because they didnt exist before that)
//   // , only then the function is executed
//   // with empty array, acts like "componentDidMount", meaning it's executed ONLY ONCE AT FIRST RENDER

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
