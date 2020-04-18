import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchedOrders(this.props.token);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (
        <div>
          {this.props.orders.map((order) => (
            <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
          ))}
        </div>
      );
    }
    return orders;
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
  loading: state.orderReducer.loading,
  token: state.authReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchedOrders: (token) => dispatch(actions.fetchOrders(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));

// import React, { Component } from "react";
// import { connect } from "react-redux";

// import Order from "../../components/Order/Order";
// import axios from "../../axios-orders";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
// import * as actions from "../../store/actions/index";
// import Spinner from "../../components/UI/Spinner/Spinner";

// class Orders extends Component {
//   componentDidMount() {
//     this.props.onFetchOrders();
//   }

//   render() {
//     let orders = <Spinner />;
//     if (!this.props.loading) {
//       orders = this.props.orders.map((order) => (
//         <Order key={order.id} ingredients={order.ingredients} price={order.price} />
//       ));
//     }
//     return <div>{orders}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     orders: state.orderReducer.orders,
//     loading: state.orderReducer.loading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchOrders: () => dispatch(actions.fetchOrders()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
