import { styled } from "styled-components";

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 600px;
  height: 750px;
  padding: 92px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SignInContainer = styled(Container)`
  height: 650px;
`;

export const Title = styled.h1`
  font-family: "Passion One";
  font-size: 100px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Guide = styled.p`
  margin: 15px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 100px;
  margin: 10px 0;
`;

export const SignInWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;
