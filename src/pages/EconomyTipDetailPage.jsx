import React from "react";
import EconomyTipHeader from "../components/EconomyTip/EconomyTipHeader";
import { useNavigate, useParams } from "react-router-dom";
import useEconomyTips from "../hooks/queries/useEconomyTips";
import Button from "../components/Button/Button";
import * as S from "../components/EconomyTip/EconomyTip.styled";

const EconomyTipDetailPage = () => {
  const param = useParams();

  const { data, mutationDelete } = useEconomyTips();

  const currentEconomyTip = data.filter((item) => {
    return item.id === param.id;
  });

  const navigate = useNavigate();

  const handleOnClickEditButton = () => {
    navigate(`/economyTipEdit/${currentEconomyTip[0].id}`);
  };

  const handleOnClickDeleteButton = () => {
    const isDelete = window.confirm(
      "삭제하면 되돌릴 수 없습니다. \n 해당 꿀팁을 삭제하시겠습니까?"
    );

    if (isDelete) {
      mutationDelete.mutate(currentEconomyTip[0]);
    }
  };

  return (
    <>
      <EconomyTipHeader />
      <S.DetailConatiner>
        <S.PageGuide>🍯..!</S.PageGuide>
        <S.ItemTitle>{currentEconomyTip[0].economyTipPostTitle}</S.ItemTitle>
        <S.ItemContent readOnly>
          {currentEconomyTip[0].economyTipPostContent}
        </S.ItemContent>
        <S.ButtonBox>
          <Button
            onClick={handleOnClickDeleteButton}
            btnType={"economyPageGray"}
          >
            삭제하기
          </Button>
          <Button
            onClick={handleOnClickEditButton}
            btnType={"economyPageBlack"}
          >
            수정하기
          </Button>
        </S.ButtonBox>
      </S.DetailConatiner>
    </>
  );
};

export default EconomyTipDetailPage;
