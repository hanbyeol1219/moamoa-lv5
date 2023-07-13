import React from "react";
import * as S from "./TodayExpense.styled";

const SettingExpenseColorInList = ({ amount }) => {
  const getExpenseStyle = () => {
    if (0 <= amount && amount < 10000) {
      return { color: "#008445", fontWeight: 500 };
    } else if (10000 <= amount && amount < 50000) {
      return { color: "#DE5000", fontWeight: 500 };
    } else if (50000 <= amount) {
      return { color: "#DE0000", fontWeight: 500 };
    }
  };
  return (
    <S.ListContentAmount style={getExpenseStyle()}>
      {amount.toLocaleString()}
    </S.ListContentAmount>
  );
};

export default SettingExpenseColorInList;
