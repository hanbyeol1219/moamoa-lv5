import { styled } from "styled-components";

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 570px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ModalContentsBox = styled.div`
  height: 85%;
`;

export const ModalExpenseDateAmountBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ModalExpenseDetailBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const ModalExpenseTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const ModalExpenseDate = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ModalExpenseDetail = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;

export const ModalButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// 수정
export const ModalEditForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalEditInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 10px;
`;

export const ModalEditTextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 10px;
  height: 100%;
  resize: none;
`;

// 삭제
export const ModalDeleteContainer = styled.div`
  width: 500px;
  height: 280px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ModalDeleteContentBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalDeleteGuide = styled.p`
  text-align: center;
  line-height: 1.6;
  margin-top: 10px;
`;
