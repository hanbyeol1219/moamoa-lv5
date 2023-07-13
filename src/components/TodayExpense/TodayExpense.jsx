import React from "react";
import * as S from "./TodayExpense.styled";
import SettingExpenseColorInList from "./SettingExpenseColorInList";

const TodayExpense = ({ todayExpense, setClickExpense }) => {
  return (
    <S.ListContentBox
      onClick={() => {
        setClickExpense(todayExpense);
      }}
    >
      {/* <S.ListContentAmount>{todayExpense.expenseAmount}</S.ListContentAmount> */}
      <SettingExpenseColorInList
        amount={Number(todayExpense.expenseAmount.replaceAll(",", ""))}
      />
      <S.ListContentDetail>{todayExpense.expenseDetails}</S.ListContentDetail>
      <S.ListContentDate>{todayExpense.expenseDate}</S.ListContentDate>
    </S.ListContentBox>
  );
};

export default TodayExpense;
