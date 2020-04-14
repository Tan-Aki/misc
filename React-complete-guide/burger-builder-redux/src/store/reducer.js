import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  purchasable: false,
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

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
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
      };

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
      };

    default:
      return state;
  }
};
