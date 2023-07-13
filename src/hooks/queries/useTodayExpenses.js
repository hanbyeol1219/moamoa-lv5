import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  addTodayExpense,
  deleteTodayExpense,
  getTodayExpense,
  patchTodayExpense,
} from "../../api/TodayExpenses";
import { QUERY_KEY } from "./queryKeys";
import {
  setIsDeleteModalOn,
  setIsDetailModalOn,
  setIsEditModalOn,
} from "../../redux/modules/modalSlice";
import { useDispatch } from "react-redux";

const useTodayExpenses = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuery(
    QUERY_KEY.EXPENSE_LISTS,
    getTodayExpense
  );

  const mutationAdd = useMutation(addTodayExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.EXPENSE_LISTS);
    },
  });

  const mutationEdit = useMutation(patchTodayExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.EXPENSE_LISTS);
      alert("수정이 완료되었습니다!");
      dispatch(setIsEditModalOn(false));
    },
  });

  const mutationDelete = useMutation(deleteTodayExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.EXPENSE_LISTS);
      alert("해당 꿀 팁이 삭제되었습니다!");
      dispatch(setIsDetailModalOn(false));
      dispatch(setIsDeleteModalOn(false));
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

export default useTodayExpenses;
