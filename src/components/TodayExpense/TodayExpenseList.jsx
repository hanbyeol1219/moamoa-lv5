import React, { useState } from "react";
import TodayExpense from "./TodayExpense";
import TodayExpenseDetailModal from "./modal/TodayExpenseDetailModal";
import TodayExpenseEditModal from "./modal/TodayExpenseEditModal";
import TodayExpenseDeleteModal from "./modal/TodayExpenseDeleteModal";
import DatePicker from "./DatePicker";
import useTodayExpenses from "../../hooks/queries/useTodayExpenses";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./TodayExpense.styled";
import Button from "../Button/Button";
import { setIsDetailModalOn } from "../../redux/modules/modalSlice";

const TodayExpenseList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useTodayExpenses();

  const [clickExpense, setClickExpense] = useState("");

  const { isEditModalOn, isDetailModalOn, isDeleteModalOn } = useSelector(
    (state) => state.modal
  );

  const [isDatePickerView, setIsDatePickerView] = useState(false);
  const [filterDate, setFilterDate] = useState("0");
  const [selectOption, setSelectOption] = useState("newest");

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  const handleDatePickerToggleButton = () => {
    if (isDatePickerView === false) {
      setIsDatePickerView(true);
    } else {
      setIsDatePickerView(false);
    }
  };

  const getSelectDateKey = (key) => {
    setFilterDate(key);
  };

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  switch (selectOption) {
    case "newest":
      data.sort(function (a, b) {
        return b.expenceRegTime - a.expenceRegTime;
      });
      break;
    case "oldest":
      data.sort(function (a, b) {
        return a.expenceRegTime - b.expenceRegTime;
      });
      break;
    case "high-amount":
      data.sort(function (a, b) {
        return (
          Number(b.expenseAmount.replaceAll(",", "")) -
          Number(a.expenseAmount.replaceAll(",", ""))
        );
      });
      break;
    case "low-amount":
      data.sort(function (a, b) {
        return (
          Number(a.expenseAmount.replaceAll(",", "")) -
          Number(b.expenseAmount.replaceAll(",", ""))
        );
      });
      break;
    default:
      return;
  }

  return (
    <S.ListContainer>
      <p>지출 확인하기 👀</p>
      <S.ListCategoryBox>
        <div>
          <Button onClick={handleDatePickerToggleButton}>
            날짜별로 조회하기
          </Button>
          {isDatePickerView ? (
            <DatePicker
              getSelectDateKey={getSelectDateKey}
              isDatePickerView={isDatePickerView}
              setIsDatePickerView={setIsDatePickerView}
            />
          ) : null}
        </div>
        <S.ListCategorySelect
          value={selectOption}
          onChange={handleOptionChange}
        >
          <option value="newest">최신순</option>
          <option value="oldest">오래된 순</option>
          <option value="high-amount">높은 금액 순</option>
          <option value="low-amount">낮은 금액 순</option>
        </S.ListCategorySelect>
      </S.ListCategoryBox>

      <S.ListBox>
        <S.ListWrapper>
          {data
            .filter((item) => {
              if (filterDate === "0") {
                return item;
              } else {
                return item.expenseDate === filterDate;
              }
            })
            .map((item) => {
              return (
                <S.List
                  key={item.id}
                  onClick={() => {
                    dispatch(setIsDetailModalOn(true));
                  }}
                >
                  <TodayExpense
                    todayExpense={item}
                    setClickExpense={setClickExpense}
                  />
                </S.List>
              );
            })}
          {isDetailModalOn && (
            <TodayExpenseDetailModal todayExpense={clickExpense} />
          )}
          {isEditModalOn && (
            <TodayExpenseEditModal todayExpense={clickExpense} />
          )}
          {isDeleteModalOn && (
            <TodayExpenseDeleteModal todayExpense={clickExpense} />
          )}
        </S.ListWrapper>
      </S.ListBox>
    </S.ListContainer>
  );
};

export default TodayExpenseList;
