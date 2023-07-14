import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodayExpenseMainPage from "../pages/TodayExpenseMainPage";
import EconomyTipMainPage from "../pages/EconomyTipMainPage";
import EconomyTipWritePage from "../pages/EconomyTipWritePage";
import EconomyTipEditPage from "../pages/EconomyTipEditPage";
import EconomyTipDetailPage from "../pages/EconomyTipDetailPage";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route
          path="/today-expense"
          element={
            <PrivateRoute>
              <TodayExpenseMainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/economyTip"
          element={
            <PrivateRoute>
              <EconomyTipMainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/economyTipWrite"
          element={
            <PrivateRoute>
              <EconomyTipWritePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/economyTipEdit/:id"
          element={
            <PrivateRoute>
              <EconomyTipEditPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/economyTipDetail/:id"
          element={
            <PrivateRoute>
              <EconomyTipDetailPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
