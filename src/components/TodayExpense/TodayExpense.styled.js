import { styled } from "styled-components";

// 헤더
export const Layout = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 20px 0;
  cursor: pointer;
`;

export const ExpenseDifference = styled.p`
  color: #aeaeae;
`;

export const TotalExpense = styled.p`
  margin: 15px 0;
  font-size: 25px;
  font-weight: 600;
`;

// 작성 form
export const WriteFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const WriteForm = styled.form`
  background-color: #f0f0f0;
  margin-top: 20px;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const WriteFormAmountInput = styled.input`
  border: none;
  border-radius: 100px;
  width: 280px;
  padding: 0 20px;
`;

export const WriteFormDetailInput = styled.input`
  border: none;
  border-radius: 100px;
  width: 520px;
  padding: 0 20px;
`;

// 리스트
export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const ListCategoryBox = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ListCategoryDateBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ListCategoryDate = styled.ul`
  position: fixed;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  text-align: center;
  border: 1px solid #f5f5f5;
`;

export const ListCategoryDateItem = styled.li`
  padding: 5px;
`;

export const ListCategorySelect = styled.select`
  font-family: "Noto Sans KR";
  border: none;
  text-align: center;
  font-size: 16px;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 470px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export const ListWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #494949;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
    border-radius: 10px;
  }
`;

export const List = styled.div`
  cursor: pointer;
  width: 98%;
  background-color: white;
  border-radius: 100px;
  padding: 20px;
  margin: 10px 0;
`;

export const ListContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ListContentAmount = styled.span`
  width: 10%;
  text-align: center;
`;
export const ListContentDetail = styled.span`
  width: 75%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ListContentDate = styled.span`
  width: 10%;
  text-align: center;
`;
