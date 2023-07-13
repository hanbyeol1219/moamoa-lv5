import React from "react";
import { useNavigate } from "react-router-dom";
import useEconomyTips from "../../hooks/queries/useEconomyTips";
import * as S from "./EconomyTip.styled";
import Button from "../Button/Button";

const EconomyTip = ({ economyTip }) => {
  const navigate = useNavigate();

  const { mutationDelete } = useEconomyTips();

  const navigateDetailPage = () => {
    navigate(`/economyTipDetail/${economyTip.id}`);
  };

  const handleOnClickEditButton = () => {
    navigate(`/economyTipEdit/${economyTip.id}`);
  };

  const handleOnClickDeleteButton = () => {
    const isDelete = window.confirm(
      "삭제하면 되돌릴 수 없습니다. \n해당 꿀팁을 삭제하시겠습니까?"
    );

    if (isDelete) {
      mutationDelete.mutate(economyTip);
    }
  };

  return (
    <S.ListItemWrapper>
      <S.ListButtonBox>
        <Button onClick={handleOnClickEditButton} btnType={"economyList"}>
          수정
        </Button>
        <Button onClick={handleOnClickDeleteButton} btnType={"economyList"}>
          삭제
        </Button>
      </S.ListButtonBox>
      <S.ListItem onClick={navigateDetailPage}>
        <p>{economyTip.economyTipPostDate}</p>
        <S.ListTitle>{economyTip.economyTipPostTitle}</S.ListTitle>
        <S.ListContent readOnly>
          {economyTip.economyTipPostContent}
        </S.ListContent>
      </S.ListItem>
    </S.ListItemWrapper>
  );
};

export default EconomyTip;
