import axios from "./base";

const getTodayExpense = async () => {
  const response = await axios.get(`/expenseLists`);
  return response.data;
};

const addTodayExpense = async (newExpense) => {
  await axios.post(`/expenseLists`, newExpense);
};

const patchTodayExpense = async (editExpense) => {
  await axios.patch(`/expenseLists/${editExpense.id}`, editExpense);
};

const deleteTodayExpense = async (todayExpense) => {
  await axios.delete(`/expenseLists/${todayExpense.id}`);
};

export {
  getTodayExpense,
  addTodayExpense,
  patchTodayExpense,
  deleteTodayExpense,
};
