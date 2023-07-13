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

export const SubTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

// 리스트
export const ListContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 750px;
`;

export const ListCount = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #008445;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItemWrapper = styled.div`
  position: relative;
`;

export const ListItem = styled.div`
  width: 100%;
  border: 2px solid #e9e9e9;
  background-color: white;
  cursor: pointer;
  padding: 15px;
  margin: 15px 0;
  border-radius: 10px;
`;

export const ListButtonBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
`;

export const ListContent = styled.textarea`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 67px;
  resize: none;
  border: none;
  outline: none;
`;

// 작성P, 수정P
export const PageGuide = styled.p`
  margin: 20px 0;
`;

export const FormConatiner = styled.form`
  width: 100%;
  height: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputTitle = styled.input`
  border: 2px solid #e9e9e9;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

export const InputContent = styled.textarea`
  border: 2px solid #e9e9e9;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  resize: none;
  height: 80%;
  line-height: 1.6;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// 상세P
export const DetailConatiner = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.p`
  border: 2px solid #e9e9e9;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
`;

export const ItemContent = styled.textarea`
  border: 2px solid #e9e9e9;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  resize: none;
  height: 80%;
  margin: 20px 0;
  line-height: 1.6;
  outline: none;
`;
