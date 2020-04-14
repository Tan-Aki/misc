import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    // try {
    //   const response = await axios.get(
    //     "https://burger-builder-e7569.firebaseio.com/ingredients.json"
    //   );
    //   const ingredients = response.data;
    //   //    {salad : 0,
    //   //    bacon: 0,
    //   //    cheese : 0,
    //   //    meat : 1 }
    //   const ingredientsPrice = Object.keys(ingredients).map((key) => {
    //     return ingredients[key] * INGREDIENT_PRICES[key];
    //   });
    //   // pour chaque clé de l'objet ingredients, on multiplie la valeur associée à la clé par le prix de l'ingrédient associé à cette clé.
    //   const totalPrice = ingredientsPrice.reduce((acc, el) => acc + el, this.state.totalPrice);
    //   this.setState({ ingredients, totalPrice, purchasable: true });
    // } catch (err) {
    //   this.setState({ error: true });
    // }
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  // updatePurchaseState = (ingredients) => {
  //   const purchasable = Object.values(ingredients).some((amount) => amount > 0);
  //   this.setState({ purchasable });
  // };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // purchaseContinueHandler = () => {
  //   const queryParams = [];

  //   for (let i in this.state.ingredients) {
  //     if (this.state.ingredients.hasOwnProperty(i)) {
  //       queryParams.push(
  //         encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i])
  //       );
  //     }
  //   }

  //   queryParams.push("price=" + this.state.totalPrice);

  //   const queryString = queryParams.join("&");

  //   this.props.history.push({
  //     pathname: "/checkout",
  //     search: "?" + queryString,
  //   });
  // };
  purchaseContinueHandler = () => {
    this.props.history.push("checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded !</p> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.props.purchasable}
            ordered={this.purchaseHandler}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
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

const mapStateToProps = (state) => ({
  ings: state.ingredients,
  price: state.totalPrice,
  purchasable: state.purchasable,
});

const mapDispatchToProps = (dispatch) => ({
  onIngredientAdded: (ingName) =>
    dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
  onIngredientRemoved: (ingName) =>
    dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
