import { useState, useEffect } from "react";

export default (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    // setState({ error: null });
    console.log("req + seterror", req);
    setError(null);
    return req;
  });

  const resInterceptor = httpClient.interceptors.response.use(
    (res) => {
      console.log("res", res);
      return res;
    },
    (err) => {
      setError(err);
      console.log("err", err);
    }
  );
  console.log("configuring req/res interceptors");

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
      console.log("removing req/res interceptors");
    };
  });

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
