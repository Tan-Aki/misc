import { put, delay } from "redux-saga/effects";
import axios from "../../axios-orders";
import * as actions from "../actions/index";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://burger-builder-e7569.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
    yield console.log("response.data from bbuilder saga", response.data);
  } catch (err) {
    yield put(actions.fetchIngredientsFailed());
  }
}
