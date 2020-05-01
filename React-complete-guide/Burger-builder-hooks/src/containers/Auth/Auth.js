import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import { checkValidity } from "../../shared/utility";

import * as actions from "../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  //////////////////////// Hey ! I agree with you, I feel like it's unnecessary since we
  // redirect to "/" in the Checkout component when we don't have any ingredients.
  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath("/");
    }
  }
  ////////////////////////////////////////////////////////////////////////////

  inputChangedHandler = (event, controlName) => {
    // what follows is deep copying

    // const updatedControls = { ...this.state.controls };

    // const updatedControl = { ...updatedControls[controlName] };

    // updatedControl.value = event.target.value;
    // updatedControl.valid = this.checkValidity(updatedControl.value, updatedControl.validation);
    // updatedControl.touched = true;

    // updatedControls[controlName] = updatedControl;

    // same as above
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      },
    };

    // let formIsValid = true;
    // for (let controlName in updatedControls) {
    //   if (updatedControls.hasOwnProperty(controlName)) {
    //     formIsValid = updatedControls[controlName].valid && formIsValid;
    //   }
    // }

    // this.setState({ controls: updateControls, formIsValid });

    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    let formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push(
        <Input
          key={key}
          {...this.state.controls[key]}
          changed={(event) => {
            this.inputChangedHandler(event, key);
            {
              /* <Input key="..." elementType="..." elementConfig="{...}" value="..." changed="..."/> */
            }
          }}
        />
      );
    }

    if (this.props.loading) {
      formElementsArray = <Spinner />;
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className={classes.Auth}>
        {authRedirect}
        {errorMessage}
        <p>{this.state.isSignup ? "SIGNUP" : "SIGNIN"}</p>
        <form onSubmit={this.submitHandler}>
          {formElementsArray}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  isAuthenticated: state.authReducer.token !== null,
  authRedirectPath: state.authReducer.authRedirectPath,
  buildingBurger: state.burgerBuilderReducer.building,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
  onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
