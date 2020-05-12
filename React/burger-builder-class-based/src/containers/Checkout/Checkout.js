import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";

import ContactData from "./ContactData/ContactData";

export default class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    console.log(query.entries);
    let price = 0;

    for (let param of query.entries()) {
      //['salad', '1']

      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1]; // converted to number by adding a +
      }
    }

    this.setState({ ingredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
          // trick to pass some props to the route, instead of using Component, we use render with an arrow function
          // we don't get the props history property with that though..
          // so we pass the props we got from the checkout route to the COntactData
        />
      </div>
    );
  }
}
