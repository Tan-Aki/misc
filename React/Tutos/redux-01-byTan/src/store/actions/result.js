import * as actionTypes from "./actionTypes";

// this is thanks to redux-thunk//////////////////////////
export const saveResult = (res) => {
  //   const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      //   const oldCounter = getState().ctr.counter;
      //   console.log("oldCounter", oldCounter);
      // dont overuse getState, instead, pass more parameters to the function storeResult to have access to them
      dispatch(saveResult(res));
    }, 2000);
  };
};

/////////////////////////////////////////////////////////
export const deleteResult = (res) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: res,
  };
};
