import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = async (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // shouldnt be done in production environement. should be calculated server side to avoid data being tempered
      customer: {
        name: "Tan2",
        address: {
          street: "Rue Amiral Ducasse",
          zipCode: "1235566",
          country: "Canada",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    try {
      const response = await axios.post("/orders.json", order); // .json for firebase
      console.log("response :", response);
      this.setState({ loading: false });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="text" name="email" placeholder="Your Mail" />
        <input type="text" name="street" placeholder="Your Street" />
        <input type="text" name="postal" placeholder="Your Postal Code" />

        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
