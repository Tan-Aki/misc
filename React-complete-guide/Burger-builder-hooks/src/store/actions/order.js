import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};
export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};
export const purchaseBurgerStart = () => {
  console.log("purchase burger start");
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    orderData,
    token,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

// DATA formatting change should be in action creators
// it's not a "logic" that should be in the reducer
// also, instead of passing the token as a param, we could also use the getstate() method
// like getstate().authReducer.token
// but it's not to use the getstate too much.
export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token,
    userId,
  };
};
