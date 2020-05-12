import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// default axios settings being set globally inside index.js
// will be overridden by instance settings
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log("request : ", request);
    //Edit request
    return request;
  },
  error => {
    console.log("error :", error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  response => {
    console.log("response : ", response);
    //Edit response
    return response;
  },
  error => {
    console.log("error :", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
