import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  purchasable: false,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const updatePurchaseState = (ingredients) => {
  return Object.values(ingredients).some((amount) => amount > 0);
};

////////////// YOU CAN REFACTOR LIKE THIS ////////////////////////////////
// (TO MAKE THE SWITCH STATEMENT LEANER)
// I WILL ONLY DO IT FOR THE ADDINGREDIENT FUNCTION ////////////////////////////
const addIngredient = (state, action) => {
  //   //   const ingredients = { ...state.ingredients };
  //   //   ingredients[type] = state.ingredients[type] + 1;

  //   //   const totalPrice = state.totalPrice + INGREDIENT_PRICES[type];

  //   return {
  //     ...state,
  //     ingredients: {
  //       ...state.ingredients,
  //       [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  //     },
  //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  //     purchasable : updatePurchaseState()
  //   };

  let updatedIngs = { ...state.ingredients };
  updatedIngs[action.ingredientName] = state.ingredients[action.ingredientName] + 1;
  return {
    ...state,
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    purchasable: updatePurchaseState(updatedIngs),
    building: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      //   return {
      //     ...state,
      //     ingredients: {
      //       ...state.ingredients,
      //       [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      //     },
      //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      //   };

      let updatedIngs2 = { ...state.ingredients };
      updatedIngs2[action.ingredientName] = state.ingredients[action.ingredientName] - 1;
      return {
        ...state,
        ingredients: updatedIngs2,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        purchasable: updatePurchaseState(updatedIngs2),
        building: true,
      };

    case actionTypes.SET_INGREDIENT:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        building: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.RESET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: 4,
      };

    default:
      return state;
  }
};

export default reducer;
