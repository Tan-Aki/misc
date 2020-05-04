// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Order from "../../components/Order/Order";
// import axios from "../../axios-orders";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
// import Spinner from "../../components/UI/Spinner/Spinner";

// import * as actions from "../../store/actions/index";

// class Orders extends Component {
//   componentDidMount() {
//     this.props.onFetchedOrders(this.props.token, this.props.userId);
//   }

//   render() {
//     let orders = <Spinner />;
//     if (!this.props.loading) {
//       orders = (
//         <div>
//           {this.props.orders.map((order) => (
//             <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
//           ))}
//         </div>
//       );
//     }
//     return orders;
//   }
// }

// const mapStateToProps = (state) => ({
//   orders: state.orderReducer.orders,
//   loading: state.orderReducer.loading,
//   token: state.authReducer.token,
//   userId: state.authReducer.userId,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFetchedOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  // componentDidMount() {
  //   this.props.onFetchOrders(this.props.token, this.props.userId);
  // }

  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
  }, []);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order key={order.id} ingredients={order.ingredients} price={order.price} />
    ));
  }
  return <div>{orders}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
// export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(Orders), axios);
