import React, { useState } from "react";
import useTodayExpenses from "../../../hooks/queries/useTodayExpenses";
import { useDispatch } from "react-redux";
import { setIsEditModalOn } from "../../../redux/modules/modalSlice";
import * as S from "./Modal.styled";
import Button from "../../Button/Button";

const TodayExpenseEditModal = ({ todayExpense }) => {
  const { mutationEdit: editMutation } = useTodayExpenses();

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(todayExpense.expenseAmount);
  const [expenseDetail, setExpenseDetail] = useState(
    todayExpense.expenseDetails
  );

  const handleEditAmountChange = (e) => {
    const value = e.target.value;
    const commaValue = Number(value.replaceAll(",", ""));
    setAmount(commaValue.toLocaleString());
  };

  const handleEditExpenseDetailChange = (e) => {
    setExpenseDetail(e.target.value);
  };

  const editExpense = {
    ...todayExpense,
    expenseAmount: amount,
    expenseDetails: expenseDetail,
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (amount <= 0 && expenseDetail.length <= 4) {
      alert(
        "지출 금액은 최소 1원부터 입력 가능합니다. \n또한, 지출 사유는 5글자 이상 작성 후 수정해주세요."
      );
    } else if (amount <= 0) {
      alert("지출 금액은 최소 1원부터 입력 가능합니다.");
      return;
    } else if (expenseDetail.length <= 4) {
      alert("지출 사유를 5글자 이상 작성해주세요.");
      return;
    } else {
      editMutation.mutate(editExpense);
    }
  };

  const handleOnClickCancelButton = () => {
    if (
      amount !== todayExpense.expenseAmount ||
      expenseDetail !== todayExpense.expenseDetails
    ) {
      let isCancel = window.confirm(
        "수정한 내용이 저장되지 않습니다. 취소하시겠습니까?"
      );
      if (isCancel) {
        dispatch(setIsEditModalOn(false));
      } else {
        return;
      }
    }
    dispatch(setIsEditModalOn(false));
  };

  return (
    <S.ModalBackDrop>
      <S.ModalContainer>
        <S.ModalEditForm onSubmit={handleSubmitButtonClick}>
          <S.ModalContentsBox>
            <S.ModalExpenseDateAmountBox>
              <S.ModalExpenseTitle>지출 날짜</S.ModalExpenseTitle>
              <S.ModalExpenseDate>
                {todayExpense.expenseDate}
              </S.ModalExpenseDate>
            </S.ModalExpenseDateAmountBox>
            <S.ModalExpenseDateAmountBox>
              <S.ModalExpenseTitle>지출 금액</S.ModalExpenseTitle>
              <S.ModalEditInput
                type="text"
                value={amount}
                onChange={handleEditAmountChange}
              />
            </S.ModalExpenseDateAmountBox>
            <S.ModalExpenseDetailBox>
              <S.ModalExpenseTitle>지출 사유</S.ModalExpenseTitle>
              <S.ModalEditTextArea
                value={expenseDetail}
                onChange={handleEditExpenseDetailChange}
              ></S.ModalEditTextArea>
            </S.ModalExpenseDetailBox>
          </S.ModalContentsBox>
          <S.ModalButtonBox>
            <Button
              type="button"
              btnType={"modalGray"}
              onClick={handleOnClickCancelButton}
            >
              취소
            </Button>
            <Button
              type="submit"
              btnType={"modalBlack"}
              onClick={handleSubmitButtonClick}
            >
              수정 완료!
            </Button>
          </S.ModalButtonBox>
        </S.ModalEditForm>
      </S.ModalContainer>
    </S.ModalBackDrop>
  );
};

export default TodayExpenseEditModal;
