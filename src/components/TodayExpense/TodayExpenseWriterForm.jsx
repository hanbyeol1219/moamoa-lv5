import React, { useCallback, useState } from "react";
import useTodayExpenses from "../../hooks/queries/useTodayExpenses";
import * as S from "./TodayExpense.styled";
import Button from "../Button/Button";

const TodayExpenseWriterForm = () => {
  const { mutationAdd: mutation } = useTodayExpenses();

  const [amount, setAmount] = useState(0);
  const [expenseDetail, setExpenseDetail] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    const commaValue = Number(value.replaceAll(",", ""));
    setAmount(commaValue.toLocaleString());
  };

  const handleExpenseDetailChange = (e) => {
    setExpenseDetail(e.target.value);
  };

  const getCurrentDate = useCallback(() => {
    var today = new Date();
    var year = today.getFullYear().toString().substr(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var day = today.getDate().toString().padStart(2, "0");
    return year + month + day;
  }, []);

  const getCurrentTime = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    return year + month + day + hours + minutes + seconds;
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (amount <= 0 && expenseDetail.length <= 4) {
      alert(
        "지출 금액은 최소 1원부터 입력 가능합니다. \n또한, 지출 사유는 5글자 이상 작성 후 추가해주세요."
      );
    } else if (amount <= 0) {
      alert("지출 금액은 최소 1원부터 입력 가능합니다.");
      return;
    } else if (expenseDetail.length <= 4) {
      alert("지출 사유를 5글자 이상 작성해주세요.");
      return;
    } else {
      const newExpense = {
        expenseDate: getCurrentDate(),
        expenceRegTime: getCurrentTime(),
        expenseAmount: amount,
        expenseDetails: expenseDetail,
      };

      mutation.mutate(newExpense);

      setExpenseDetail("");
      setAmount(0);
    }
  };

  return (
    <S.WriteFormContainer>
      <p>지출 추가하기..💸</p>
      <S.WriteForm onSubmit={handleSubmitButtonClick}>
        <S.WriteFormAmountInput
          type="text"
          value={amount}
          onChange={handleAmountChange}
        />
        <S.WriteFormDetailInput
          type="text"
          placeholder="지출 사유를 작성해주세요. (5글자 이상)"
          value={expenseDetail}
          onChange={handleExpenseDetailChange}
        />
        <Button type="submit" btnType={"expenseAdd"}>
          추가
        </Button>
      </S.WriteForm>
    </S.WriteFormContainer>
  );
};

export default TodayExpenseWriterForm;
