import * as actionTypes from "../actions/actionTypes";
import { deleteResult } from "../actions";

const initialState = {
  results: [],
};

// you can store the case in a function to make your switch case leaner
const deleteREsult = (state, action) => {
  const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
  return {
    ...state,
    results: updatedArray,
  };
};

// it's better to put logic transforming the state in the reducer
// you should not transform the state too much in actionCreators, simply get the async data from them

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result * 2 }),
      };

    // concat returns a new array. immutable version of push

    // const resultsState = [...state.results];
    // resultsState.push(state.counter);
    // return {
    //   ...state,
    //   results: resultsState,
    // };

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const updatedArray = [...state.results];
      // updatedArray.splice(id, 1);

      // const updatedArray = state.results.filter((result, index) => index !== id);
      return deleteResult(state, action);
    default:
      return state;
  }
  // no need for break or default statement because we return
};

export default reducer;
