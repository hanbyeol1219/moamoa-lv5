import React, { useState } from "react";
import Button from "../components/Button/Button";
import * as S from "../components/LoginSignIn/LoginSignIn.styled";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/queries/useLogin";

const Login = () => {
  const navigate = useNavigate();

  const { userLogin } = useLogin();

  const [userLoninId, setUserLoninId] = useState("");
  const [userLoninPw, setUserLoninPW] = useState("");

  const handleUserLoninIdChange = (e) => {
    setUserLoninId(e.target.value);
  };

  const handleUserLoninPwChange = (e) => {
    setUserLoninPW(e.target.value);
  };

  const currentUser = {
    id: userLoninId,
    password: userLoninPw,
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (userLoninId === "" && userLoninPw === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else if (userLoninId === "") {
      alert("아이디를 입력해주세요.");
    } else if (userLoninPw === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      userLogin.mutate(currentUser);
    }
  };

  return (
    <S.Layout>
      <S.Container>
        <S.Title>MOAMOA</S.Title>
        <S.FormContainer onSubmit={handleSubmitButtonClick}>
          <S.Guide>회원이신가요?</S.Guide>
          <S.Input
            type="text"
            placeholder="아이디를 입력하세요."
            value={userLoninId}
            onChange={handleUserLoninIdChange}
          />
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={userLoninPw}
            onChange={handleUserLoninPwChange}
          />
          <Button btnType={"loginSignIn"}>로그인</Button>
          <S.SignInWrapper>
            <S.Guide>아직 회원이 아니신가요?</S.Guide>
            <Button
              onClick={() => navigate("/sign-in")}
              btnType={"loginSignIn"}
            >
              회원가입
            </Button>
          </S.SignInWrapper>
        </S.FormContainer>
      </S.Container>
    </S.Layout>
  );
};

export default Login;
