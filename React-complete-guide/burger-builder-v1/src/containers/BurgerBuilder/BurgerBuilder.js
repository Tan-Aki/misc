import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://burger-builder-e7569.firebaseio.com/ingredients.json"
      );

      const ingredients = response.data;
      //    {salad : 0,
      //    bacon: 0,
      //    cheese : 0,
      //    meat : 1 }

      const ingredientsPrice = Object.keys(ingredients).map((key) => {
        return ingredients[key] * INGREDIENT_PRICES[key];
      });
      // pour chaque clé de l'objet ingredients, on multiplie la valeur associée à la clé par le prix de l'ingrédient associé à cette clé.

      const totalPrice = ingredientsPrice.reduce((acc, el) => acc + el, this.state.totalPrice);

      this.setState({ ingredients, totalPrice, purchasable: true });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  updatePurchaseState = (ingredients) => {
    const purchasable = Object.values(ingredients).some((amount) => amount > 0);
    this.setState({ purchasable });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];

    for (let i in this.state.ingredients) {
      if (this.state.ingredients.hasOwnProperty(i)) {
        queryParams.push(
          encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i])
        );
      }
    }

    queryParams.push("price=" + this.state.totalPrice);

    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  addIngredientHandler = (type) => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = this.state.ingredients[type] + 1;

    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ ingredients, totalPrice });

    // setTimeout(() => {
    //   console.log(this.state);
    // }, 1000);

    this.updatePurchaseState(ingredients);
  };

  removeIngredientHandler = (type) => {
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

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded !</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
