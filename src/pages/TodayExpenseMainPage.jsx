import React from "react";
import TodayExpenseHeader from "../components/TodayExpense/TodayExpenseHeader";
import TodayExpenseWriterForm from "../components/TodayExpense/TodayExpenseWriterForm";
import TodayExpenseList from "../components/TodayExpense/TodayExpenseList";
import useTodayExpenses from "../hooks/queries/useTodayExpenses";

const TodayExpenseMainPage = () => {
  const { isLoading, isError, data } = useTodayExpenses();

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  const getCurrentDate = () => {
    var today = new Date();
    var year = today.getFullYear().toString().substr(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var day = today.getDate().toString().padStart(2, "0");
    return year + month + day;
  };
  const todayDate = getCurrentDate();
  const yesterdayDate = String(getCurrentDate() - 1);

  // 어제의 지출 비용과 오늘의 지출 비용 구하기
  let yesterdayExpense = 0;
  let todayExpense = 0;
  const getExpense = () => {
    data.map((item) => {
      if (item.expenseDate === yesterdayDate) {
        yesterdayExpense += Number(item.expenseAmount.replaceAll(",", ""));
      } else if (item.expenseDate === todayDate) {
        todayExpense += Number(item.expenseAmount.replaceAll(",", ""));
      }
    });
  };
  getExpense();

  return (
    <>
      <TodayExpenseHeader
        todayExpense={todayExpense}
        yesterdayExpense={yesterdayExpense}
      />
      <TodayExpenseWriterForm />
      <TodayExpenseList />
    </>
  );
};

export default TodayExpenseMainPage;
