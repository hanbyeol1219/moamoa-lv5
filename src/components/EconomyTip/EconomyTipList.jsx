import React from "react";
import EconomyTip from "./EconomyTip";
import useEconomyTips from "../../hooks/queries/useEconomyTips";
import * as S from "./EconomyTip.styled";

const EconomyTipList = () => {
  const { isLoading, isError, data } = useEconomyTips();

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <S.ListContainer>
      <p>
        현재 작성된 꿀 팁은 <S.ListCount>{data.length}</S.ListCount>개 입니다!
      </p>
      <S.ListBox>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <EconomyTip economyTip={item} />
            </div>
          );
        })}
      </S.ListBox>
    </S.ListContainer>
  );
};

export default EconomyTipList;
