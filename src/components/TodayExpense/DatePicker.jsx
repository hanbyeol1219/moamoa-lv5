import React from "react";
import useTodayExpenses from "../../hooks/queries/useTodayExpenses";
import * as S from "./TodayExpense.styled";

const DatePicker = ({
  getSelectDateKey,
  isDatePickerView,
  setIsDatePickerView,
}) => {
  let expenseDateArr = [];

  const { isLoading, isError, data } = useTodayExpenses();

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  expenseDateArr = data.filter(
    (arr, idx, callback) =>
      idx === callback.findIndex((i) => i.expenseDate === arr.expenseDate)
  );

  const handleDateOnClick = (event) => {
    const key = event.currentTarget.getAttribute("data-key");
    setIsDatePickerView(false);
    getSelectDateKey(key);
  };
  return (
    <>
      <S.ListCategoryDateBackDrop
        onClick={() => setIsDatePickerView(!isDatePickerView)}
      ></S.ListCategoryDateBackDrop>
      <S.ListCategoryDate>
        <S.ListCategoryDateItem data-key="0" onClick={handleDateOnClick}>
          전체보기
        </S.ListCategoryDateItem>
        {expenseDateArr.map((item) => {
          return (
            <S.ListCategoryDateItem
              key={item.expenseDate}
              data-key={item.expenseDate}
              onClick={handleDateOnClick}
            >
              {item.expenseDate}
            </S.ListCategoryDateItem>
          );
        })}
      </S.ListCategoryDate>
    </>
  );
};

export default DatePicker;
