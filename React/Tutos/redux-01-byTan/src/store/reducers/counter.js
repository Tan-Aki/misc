import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // original way
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.ADD:
      // to make it cleaner, you can use updateObject
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
    default:
      return state;
  }
  // no need for break or default statement because we return
};

export default reducer;
