import React, { useState } from "react";
import Button from "../components/Button/Button";
import useLogin from "../hooks/queries/useLogin";
import * as S from "../components/LoginSignIn/LoginSignIn.styled";

const SignIn = () => {
  const { userSignIn } = useLogin();

  const [userSignInId, setUserSignInId] = useState("");
  const [userSignInPw, setUserSignInPW] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const handleUserIdChange = (e) => {
    setUserSignInId(e.target.value);
  };

  const handleUserPwChange = (e) => {
    setUserSignInPW(e.target.value);
  };

  const handleCheckPwChange = (e) => {
    setCheckPw(e.target.value);
  };

  const newUser = {
    id: userSignInId,
    password: userSignInPw,
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (userSignInId === "" && userSignInPw === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else if (userSignInId === "") {
      alert("아이디를 입력해주세요.");
    } else if (userSignInPw === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (checkPw === "") {
      alert("비밀번호 확인을 위해 한 번 더 입력해주세요.");
    } else if (userSignInPw !== checkPw) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    } else {
      userSignIn.mutate(newUser);
    }
  };

  return (
    <S.Layout>
      <S.SignInContainer>
        <S.Title>MOAMOA</S.Title>
        <S.Guide>회원가입 후 다시 로그인해주세요.</S.Guide>
        <S.FormContainer onSubmit={handleSubmitButtonClick}>
          <S.Input
            type="text"
            placeholder="아이디를 입력하세요."
            value={userSignInId}
            onChange={handleUserIdChange}
          />
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={userSignInPw}
            onChange={handleUserPwChange}
          />
          <S.Input
            type="password"
            placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
            value={checkPw}
            onChange={handleCheckPwChange}
          />
          <Button type="submit" btnType={"loginSignIn"}>
            회원가입
          </Button>
        </S.FormContainer>
      </S.SignInContainer>
    </S.Layout>
  );
};

export default SignIn;
