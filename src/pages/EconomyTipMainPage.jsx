import React from "react";
import EconomyTipHeader from "../components/EconomyTip/EconomyTipHeader";
import EconomyTipList from "../components/EconomyTip/EconomyTipList";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const EconomyTipMainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <EconomyTipHeader />
      <EconomyTipList />
      <Button
        onClick={() => navigate("/economyTipWrite")}
        btnType={"economyTipAdd"}
      >
        나만의 꿀 팁 작성하기..🍯
      </Button>
    </>
  );
};

export default EconomyTipMainPage;
