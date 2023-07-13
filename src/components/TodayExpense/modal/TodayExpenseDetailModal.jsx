import React from "react";
import { useDispatch } from "react-redux";
import {
  setIsDeleteModalOn,
  setIsDetailModalOn,
  setIsEditModalOn,
} from "../../../redux/modules/modalSlice";
import * as S from "./Modal.styled";
import Button from "../../Button/Button";
import SettingExpenseColorInModal from "../SettingExpenseColorInModal";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TodayExpenseDetailModal = ({ todayExpense }) => {
  const dispatch = useDispatch();

  return (
    <S.ModalBackDrop>
      <S.ModalContainer>
        <Button btnType={"modalClose"}>
          <IoMdCloseCircleOutline
            size="30"
            color="#5B5B5B"
            onClick={() => dispatch(setIsDetailModalOn(false))}
          />
        </Button>
        <S.ModalContentsBox>
          <S.ModalExpenseDateAmountBox>
            <S.ModalExpenseTitle>지출 날짜</S.ModalExpenseTitle>
            <S.ModalExpenseDate>{todayExpense.expenseDate}</S.ModalExpenseDate>
          </S.ModalExpenseDateAmountBox>
          <S.ModalExpenseDateAmountBox>
            <S.ModalExpenseTitle>지출 금액</S.ModalExpenseTitle>
            <SettingExpenseColorInModal
              amount={Number(todayExpense.expenseAmount.replaceAll(",", ""))}
            />
          </S.ModalExpenseDateAmountBox>
          <S.ModalExpenseDetailBox>
            <S.ModalExpenseTitle>지출 사유</S.ModalExpenseTitle>
            <S.ModalExpenseDetail>
              {todayExpense.expenseDetails}
            </S.ModalExpenseDetail>
          </S.ModalExpenseDetailBox>
        </S.ModalContentsBox>
        <S.ModalButtonBox>
          <Button
            onClick={() => {
              dispatch(setIsDetailModalOn(false));
              dispatch(setIsEditModalOn(true));
            }}
            btnType={"modalBlack"}
          >
            수정하기
          </Button>
          <Button
            onClick={() => {
              dispatch(setIsDeleteModalOn(true));
            }}
            btnType={"modalGray"}
          >
            삭제하기
          </Button>
        </S.ModalButtonBox>
      </S.ModalContainer>
    </S.ModalBackDrop>
  );
};

export default TodayExpenseDetailModal;
