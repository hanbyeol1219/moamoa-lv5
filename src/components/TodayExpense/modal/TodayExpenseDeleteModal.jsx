import React from "react";
import { PiWarningBold } from "react-icons/pi";
import useTodayExpenses from "../../../hooks/queries/useTodayExpenses";
import { useDispatch } from "react-redux";
import { setIsDeleteModalOn } from "../../../redux/modules/modalSlice";
import * as S from "./Modal.styled";
import Button from "../../Button/Button";

const TodayExpenseDeleteModal = ({ todayExpense }) => {
  const { mutationDelete: deleteMutation } = useTodayExpenses();
  const dispatch = useDispatch();

  const handleOnClickDeleteButton = () => {
    deleteMutation.mutate(todayExpense);
  };

  return (
    <S.ModalBackDrop>
      <S.ModalDeleteContainer>
        <S.ModalDeleteContentBox>
          <PiWarningBold size={25} color="#DE0000" />
          <S.ModalDeleteGuide>
            삭제하면 되돌릴 수 없습니다. <br />
            해당 지출 내역을 <span>삭제</span>하시겠습니까?
          </S.ModalDeleteGuide>
        </S.ModalDeleteContentBox>
        <S.ModalButtonBox>
          <Button
            onClick={() => {
              dispatch(setIsDeleteModalOn(false));
            }}
            btnType={"modalGray"}
          >
            취소
          </Button>
          <Button onClick={handleOnClickDeleteButton} btnType={"modalBlack"}>
            삭제
          </Button>
        </S.ModalButtonBox>
      </S.ModalDeleteContainer>
    </S.ModalBackDrop>
  );
};

export default TodayExpenseDeleteModal;
