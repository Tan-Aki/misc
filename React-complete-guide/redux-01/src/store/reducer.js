const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };

    // concat returns a new array. immutable version of push

    // const resultsState = [...state.results];
    // resultsState.push(state.counter);
    // return {
    //   ...state,
    //   results: resultsState,
    // };

    case "DELETE_RESULT":
      // const id = 2;
      // const updatedArray = [...state.results];
      // updatedArray.splice(id, 1);

      // const updatedArray = state.results.filter((result, index) => index !== id);
      const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray,
      };
  }
  // no need for break or default statement because we return

  return state;
};

export default reducer;
