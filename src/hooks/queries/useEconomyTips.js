import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  addEconomyTip,
  deleteEconomyTip,
  getEconomyTip,
  patchEconomyTip,
} from "../../api/EconomyTips";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "./queryKeys";

const useEconomyTips = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(
    QUERY_KEY.ECONOMY_TIPS_POSTS,
    getEconomyTip
  );

  const mutationAdd = useMutation(addEconomyTip, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.ECONOMY_TIPS_POSTS);
      navigate("/economyTip");
    },
  });

  const mutationEdit = useMutation(patchEconomyTip, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.ECONOMY_TIPS_POSTS);
      alert("수정이 완료되었습니다!");
      navigate("/economyTip");
    },
  });

  const mutationDelete = useMutation(deleteEconomyTip, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.ECONOMY_TIPS_POSTS);
      alert("해당 꿀 팁이 삭제되었습니다!");
      navigate("/economyTip");
    },
  });

  return {
    data,
    isLoading,
    isError,
    mutationAdd,
    mutationEdit,
    mutationDelete,
  };
};

export default useEconomyTips;
