import React, { Component, Fragment, useEffect, useState, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import * as actions from "../../store/actions/index";

const BurgerBuilder = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  // state = {
  //   purchasing: false,
  // };

  const [purchasing, setPurchasing] = useState(false);

  const ings = useSelector((state) => state.burgerBuilderReducer.ingredients);
  const price = useSelector((state) => state.burgerBuilderReducer.totalPrice);
  const purchasable = useSelector((state) => state.burgerBuilderReducer.purchasable);
  const error = useSelector((state) => state.burgerBuilderReducer.error);
  const isAuthenticated = useSelector((state) => state.authReducer.token !== null);

  const dispatch = useDispatch();

  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onResetTotalPrice = useCallback(() => dispatch(actions.resetTotalPrice()), [dispatch]);
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

  // async componentDidMount() {
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
  // }

  // componentDidMount() {
  // }

  useEffect(() => {
    onInitIngredients();
    onResetTotalPrice();
    console.log("CDMount Burger Builder");
  }, [onInitIngredients, onResetTotalPrice]);

  // componentDidUpdate(nextProps, nextState) {
  //   console.log("CD update Burger Builder");
  // }

  // componentWillUnmount() {
  //   console.log("CW Unmount Burger Builder");
  // }

  const purchaseHandler = () => {
    if (isAuthenticated) {
      // setState({ purchasing: true });
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  // updatePurchaseState = (ingredients) => {
  //   const purchasable = Object.values(ingredients).some((amount) => amount > 0);
  //   this.setState({ purchasable });
  // };

  const purchaseCancelHandler = () => {
    // setState({ purchasing: false });
    setPurchasing(false);
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
  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("checkout");
  };

  const disabledInfo = { ...ings };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded !</p> : <Spinner />;

  if (ings) {
    burger = (
      <Fragment>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          price={price}
          purchasable={purchasable}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
        />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        price={price}
      />
    );
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
};

// const mapStateToProps = (state) => ({
//   ings: state.burgerBuilderReducer.ingredients,
//   price: state.burgerBuilderReducer.totalPrice,
//   purchasable: state.burgerBuilderReducer.purchasable,
//   error: state.burgerBuilderReducer.error,
//   isAuthenticated: state.authReducer.token !== null,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
//   onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
//   onInitIngredients: () => dispatch(actions.initIngredients()),
//   onInitPurchase: () => dispatch(actions.purchaseInit()),
//   onResetTotalPrice: () => dispatch(actions.resetTotalPrice()),
//   onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
// });

// export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);
// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
export default withErrorHandler(BurgerBuilder, axios);
