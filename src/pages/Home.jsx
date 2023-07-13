import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/Home/Home.styled";
import Button from "../components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <S.MainLayout>
      <S.MainContainer>
        <S.Title>MOAMOA</S.Title>
        <S.ClickMent>클릭하여 이동하세요</S.ClickMent>
        <S.ButtuonWrapper>
          <Button onClick={() => navigate("/today-expense")} btnType={"main"}>
            오늘의 지출
          </Button>
          <Button onClick={() => navigate("/economyTip")} btnType={"main"}>
            절약 꿀팁
          </Button>
        </S.ButtuonWrapper>
      </S.MainContainer>
    </S.MainLayout>
  );
};

export default Home;
