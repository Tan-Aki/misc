import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.counter }),
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
