import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { fetchOrdersSaga, purchaseBurgerSaga } from "./order";
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

export function* watchAuth() {
  // the all function allows to execute tasks simultaneously.
  // in this case it is not useful, but you could use call to make multiple axios request at the same time
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  // takeLatest is the equivalent of debounce function. Will only take the lastest click for exemple
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
