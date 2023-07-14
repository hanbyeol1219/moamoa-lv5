import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./EconomyTip.styled";
import Button from "../Button/Button";
import { removeCookie } from "../../Cookie";

const EconomyTipHeader = () => {
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    navigate("/");
    removeCookie("token");
  };
  return (
    <S.Layout>
      <Button onClick={handleLogoutButtonClick} btnType={"logout"}>
        로그아웃
      </Button>
      <S.Title onClick={() => navigate("/")}>MOAMOA</S.Title>
      <Button onClick={() => navigate("/today-expense")} btnType={"navigate"}>
        오늘의 지출 보러가기!
      </Button>
      <S.SubTitle>절약 꿀 TIP 모아모아 🤑</S.SubTitle>
    </S.Layout>
  );
};

export default EconomyTipHeader;
