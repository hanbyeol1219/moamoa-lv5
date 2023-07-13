import React, { useCallback, useState } from "react";
import EconomyTipHeader from "../components/EconomyTip/EconomyTipHeader";
import { useNavigate } from "react-router-dom";
import useEconomyTips from "../hooks/queries/useEconomyTips";
import Button from "../components/Button/Button";
import * as S from "../components/EconomyTip/EconomyTip.styled";

const EconomyTipWritePage = () => {
  const navigate = useNavigate();

  const { mutationAdd } = useEconomyTips();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleOnClickCancelButton = (e) => {
    e.preventDefault();

    if (title !== "" || content !== "") {
      let isCancel = window.confirm(
        "작성한 내용이 저장되지 않습니다. 취소하시겠습니까?"
      );

      if (isCancel) {
        navigate("/economyTip");
        return;
      } else {
        return;
      }
    }
    navigate("/economyTip");
  };

  const getCurrentDate = useCallback(() => {
    var today = new Date();
    var year = today.getFullYear().toString().substr(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var day = today.getDate().toString().padStart(2, "0");
    return year + month + day;
  }, []);

  const getCurrentTime = useCallback(() => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    return year + month + day + hours + minutes + seconds;
  }, []);

  const newEconomyTip = {
    economyTipPostDate: getCurrentDate(),
    economyTipPostTime: getCurrentTime(),
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
      mutationAdd.mutate(newEconomyTip);
      alert("작성되었습니다!");
    }
  };

  return (
    <>
      <EconomyTipHeader />
      <S.PageGuide>나만의 꿀 팁 작성 ✍🏻</S.PageGuide>
      <S.FormConatiner onSubmit={handleSubmitButtonClick}>
        <S.InputTitle
          type="text"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={handleTitleChange}
        />
        <S.InputContent
          value={content}
          placeholder="내용을 입력해주세요. (10글자 이상)"
          onChange={handleContentChange}
        ></S.InputContent>
        <S.ButtonBox>
          <Button
            onClick={handleOnClickCancelButton}
            btnType={"economyPageGray"}
          >
            취소
          </Button>
          <Button type="submit" btnType={"economyPageBlack"}>
            작성 완료!
          </Button>
        </S.ButtonBox>
      </S.FormConatiner>
    </>
  );
};

export default EconomyTipWritePage;
