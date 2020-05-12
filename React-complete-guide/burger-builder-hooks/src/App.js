import React, { useEffect, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, Redirect } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const App = (props) => {
  // useEffect(() => {
  //   props.onTryAutoSignup();
  // }, []);

  const { onTryAutoSignup } = props;
  useEffect(() => {
    onTryAutoSignup();
    console.log("trying auto signup");
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes} </Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// not necessary ?   lecture 337
// export default withRouter(connect(null, mapDispatchToProps)(App));
