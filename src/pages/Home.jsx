import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/Home/Home.styled";
import Button from "../components/Button/Button";
import useLogin from "../hooks/queries/useLogin";

const Home = () => {
  const navigate = useNavigate();
  const { data } = useLogin();
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
          {data ? null : (
            <div>
              <Button onClick={() => navigate("/login")}>로그인</Button>
              <Button onClick={() => navigate("/sign-in")}>회원가입</Button>
            </div>
          )}
        </S.ButtuonWrapper>
      </S.MainContainer>
    </S.MainLayout>
  );
};

export default Home;
