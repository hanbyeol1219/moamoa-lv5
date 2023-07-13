import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EconomyTipHeader from "../components/EconomyTip/EconomyTipHeader";
import useEconomyTips from "../hooks/queries/useEconomyTips";
import Button from "../components/Button/Button";
import * as S from "../components/EconomyTip/EconomyTip.styled";

const EconomyTipEditPage = () => {
  const param = useParams();

  const { data, mutationEdit } = useEconomyTips();

  const currentEconomyTip = data.filter((item) => {
    return item.id === param.id;
  });

  const navigate = useNavigate();

  const [title, setTitle] = useState(currentEconomyTip[0].economyTipPostTitle);
  const [content, setContent] = useState(
    currentEconomyTip[0].economyTipPostContent
  );

  const handleEditTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditContentChange = (e) => {
    setContent(e.target.value);
  };

  const editEconomyTip = {
    ...currentEconomyTip[0],
    economyTipPostTitle: title,
    economyTipPostContent: content,
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (title === "" && content.length <= 9) {
      alert("제목을 입력해주세요. \n또한, 내용은 10글자 이상 입력해주세요.");
      return;
    } else if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    } else if (content.length <= 9) {
      alert("내용을 10글자 이상 입력해주세요.");
      return;
    } else {
      mutationEdit.mutate(editEconomyTip);
    }
  };

  const handleOnClickCancelButton = () => {
    if (
      title !== currentEconomyTip[0].economyTipPostTitle ||
      content !== currentEconomyTip[0].economyTipPostContent
    ) {
      let isCancel = window.confirm(
        "수정한 내용이 저장되지 않습니다. 취소하시겠습니까?"
      );
      if (isCancel) {
        alert("수정이 취소되었습니다.");
        navigate("/economyTip");
        return;
      } else {
        navigate(`/economyTipEdit/${param.id}`);
        return;
      }
    } else {
      navigate("/economyTip");
    }
  };

  return (
    <>
      <EconomyTipHeader />
      <S.PageGuide>꿀 팁 수정 중..✍🏻</S.PageGuide>
      <S.FormConatiner onSubmit={handleSubmitButtonClick}>
        <S.InputTitle
          type="text"
          value={title}
          onChange={handleEditTitleChange}
        />
        <S.InputContent
          value={content}
          onChange={handleEditContentChange}
        ></S.InputContent>
        <S.ButtonBox>
          <Button
            type="button"
            onClick={handleOnClickCancelButton}
            btnType={"economyPageGray"}
          >
            취소
          </Button>
          <Button type="submit" btnType={"economyPageBlack"}>
            수정 완료!
          </Button>
        </S.ButtonBox>
      </S.FormConatiner>
    </>
  );
};

export default EconomyTipEditPage;
