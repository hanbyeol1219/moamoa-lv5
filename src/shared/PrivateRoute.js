import React from "react";
import useLogin from "../hooks/queries/useLogin";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { data } = useLogin();
  return data ? (
    children
  ) : (
    <Navigate to="/" {...alert("로그인 후 이용해주세요!")} />
  );
};

export default PrivateRoute;
