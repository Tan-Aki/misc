import { put, delay } from "redux-saga/effects";
import axios from "../../axios-orders";
import * as actions from "../actions/index";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());

  try {
    const response = yield axios.post("/orders.json?auth=" + action.token, action.orderData);
    console.log("res data", response);
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  console.log("fetchedOrders");
  yield put(actions.fetchOrdersStart());
  const queryParams = yield "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';

  try {
    const response = yield axios.get("/orders.json" + queryParams);
    console.log("res.data", response.data);
    const fetchedOrders = [];
    for (let key in response.data) {
      if (response.data.hasOwnProperty(key)) {
        fetchedOrders.push({
          ...response.data[key],
          id: key,
        });
      }
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}

// export function* initIngredientsSaga(action) {
//   try {
//     const response = yield axios.get(
//       "https://burger-builder-e7569.firebaseio.com/ingredients.json"
//     );
//     yield put(actions.setIngredients(response.data));
//   } catch (err) {
//     yield put(actions.fetchIngredientsFailed());
//   }
// }
