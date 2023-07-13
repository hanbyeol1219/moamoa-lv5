import React from "react";

const SettingExpenseColor = ({ todayExpense }) => {
  const getExpenseStyle = () => {
    if (0 <= todayExpense && todayExpense < 10000) {
      return { color: "#008445", fontSize: "40px" };
    } else if (10000 <= todayExpense && todayExpense < 50000) {
      return { color: "#DE5000", fontSize: "40px" };
    } else if (50000 <= todayExpense) {
      return { color: "#DE0000", fontSize: "40px" };
    }
  };
  return <span style={getExpenseStyle()}>{todayExpense.toLocaleString()}</span>;
};

export default SettingExpenseColor;
