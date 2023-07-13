import React from "react";

const SettingExpenseColorInModal = ({ amount }) => {
  const getExpenseStyle = () => {
    if (0 <= amount && amount < 10000) {
      return { color: "#008445", fontSize: "40px", fontWeight: 600 };
    } else if (10000 <= amount && amount < 50000) {
      return { color: "#DE5000", fontSize: "40px", fontWeight: 600 };
    } else if (50000 <= amount) {
      return { color: "#DE0000", fontSize: "40px", fontWeight: 600 };
    }
  };
  return <span style={getExpenseStyle()}>{amount.toLocaleString()}</span>;
};

export default SettingExpenseColorInModal;
