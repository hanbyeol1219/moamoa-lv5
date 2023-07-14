import styled from "styled-components";

const Button = ({ onClick, children, btnType }) => {
  const handleButtonType = (btnType) => {
    switch (btnType) {
      case "main":
        return `width : 400px; padding: 20px 0; margin: 10px 0; border: 3px solid black; background-color: white; font-size: 30px; border-radius: 100px;`;
      case "expenseAdd":
        return `width : 100px; padding : 10px 0; background-color: black; border-radius: 100px; color: white`;
      case "navigate":
        return `width: 220px; padding: 25px 0; background-color: #f5f5f5; border-radius: 0 100px 100px 0; position: absolute; top: 30px; left: 0;`;
      case "modalClose":
        return `width: 30px; height: 30px; position: absolute; top: 10px; right: 30px`;
      case "modalBlack":
        return `width: 215px; padding: 10px 0; background-color: black;  border-radius: 10px; color: white; font-size: 18px`;
      case "modalGray":
        return `width: 215px; padding: 10px 0; background-color: #5B5B5B;  border-radius: 10px; color: white; font-size: 18px`;
      case "economyTipAdd":
        return `width: 300px; padding: 10px 0;  background-color: black;  border-radius: 100px; color: white; font-size: 18px; position: fixed; bottom: 30px `;
      case "economyList":
        return `padding: 5px 10px 0 0; color:#5B5B5B`;
      case "economyPageBlack":
        return `width: 495px; padding: 10px 0; background-color: black;  border-radius: 10px; color: white; font-size: 18px`;
      case "economyPageGray":
        return `width: 495px; padding: 10px 0; background-color: #5B5B5B;  border-radius: 10px; color: white; font-size: 18px`;
      case "logout":
        return `position: absolute; top: 20px; right: 25px; color:#5B5B5B`;
      case "loginSignIn":
        return `width: 100%; padding: 15px 0;  background-color: black;  border-radius: 100px; color: white; font-size: 18px; margin-top: 10px`;
      default:
        return;
    }
  };

  const ButtonContainer = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 16px;
    border-radius: 10px;
    color: black;
    padding: 10px;
    text-align: center;

    ${() => handleButtonType(btnType)}
  `;

  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
