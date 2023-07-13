import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodayExpenseMainPage from "../pages/TodayExpenseMainPage";
import EconomyTipMainPage from "../pages/EconomyTipMainPage";
import EconomyTipWritePage from "../pages/EconomyTipWritePage";
import EconomyTipEditPage from "../pages/EconomyTipEditPage";
import EconomyTipDetailPage from "../pages/EconomyTipDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today-expense" element={<TodayExpenseMainPage />} />
        <Route path="/economyTip" element={<EconomyTipMainPage />} />
        <Route path="/economyTipWrite" element={<EconomyTipWritePage />} />
        <Route path="/economyTipEdit/:id" element={<EconomyTipEditPage />} />
        <Route
          path="/economyTipDetail/:id"
          element={<EconomyTipDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
