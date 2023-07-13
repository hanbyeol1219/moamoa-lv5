import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TodayExpense.styled";
import SettingExpenseColor from "./SettingExpenseColor";
import Button from "../Button/Button";

const TodayExpenseHeader = ({ todayExpense, yesterdayExpense }) => {
  const navigate = useNavigate();

  const expenseDifference = () => {
    if (todayExpense === yesterdayExpense) {
      return (
        <S.ExpenseDifference>
          어제와 오늘의 지출 금액이 동일해요 👍🏻
        </S.ExpenseDifference>
      );
    } else if (todayExpense > yesterdayExpense) {
      return (
        <S.ExpenseDifference>
          umm..어제보다 지출 금액이{" "}
          <span>{todayExpense - yesterdayExpense}</span>원 늘었어요 😓
        </S.ExpenseDifference>
      );
    } else {
      return (
        <S.ExpenseDifference>
          wow! 어제보다 지출 금액이{" "}
          <span>{(todayExpense - yesterdayExpense) * -1}</span>원 줄었어요 😊
        </S.ExpenseDifference>
      );
    }
  };

  return (
    <S.Layout>
      <S.Title onClick={() => navigate("/")}>MOAMOA</S.Title>
      <Button onClick={() => navigate("/economyTip")} btnType={"navigate"}>
        절약 꿀 TIP 보러가기!
      </Button>
      {expenseDifference()}
      <S.TotalExpense>
        오늘의 지출은? <SettingExpenseColor todayExpense={todayExpense} /> 원
      </S.TotalExpense>
    </S.Layout>
  );
};

export default TodayExpenseHeader;
