import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  updatePurchaseState = ingredients => {
    const purchasable = Object.values(ingredients).some(amount => amount > 0);
    this.setState({ purchasable });
  };

  purchaseContinueHandler = () => {
    alert("You continue !");
  };

  addIngredientHandler = type => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = this.state.ingredients[type] + 1;

    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ ingredients, totalPrice });

    // setTimeout(() => {
    //   console.log(this.state);
    // }, 1000);

    this.updatePurchaseState(ingredients);
  };

  removeIngredientHandler = type => {
    const ingredients = { ...this.state.ingredients };

    if (ingredients[type] <= 0) return;

    ingredients[type] = this.state.ingredients[type] - 1;

    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({ ingredients, totalPrice });

    this.updatePurchaseState(ingredients);

    // const ingredients = { ...this.state.ingredients };
    // if (ingredients[type] > 0) ingredients[type] = this.state.ingredients[type] - 1;

    // let totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    // if (totalPrice < 4) totalPrice = 4;

    // this.setState({ ingredients, totalPrice });

    // setTimeout(() => {
    //   console.log(this.state);
    // }, 1000);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        {/* <button onClick={this.addIngredientHandler.bind(this, "salad")}> + </button> */}
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
