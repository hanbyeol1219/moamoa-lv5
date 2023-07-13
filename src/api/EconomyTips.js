import axios from "./base";

const getEconomyTip = async () => {
  const response = await axios.get(`/economyTipPosts`);
  return response.data;
};

const addEconomyTip = async (newEconomyTip) => {
  await axios.post(`/economyTipPosts`, newEconomyTip);
};

const patchEconomyTip = async (editEconomyTip) => {
  await axios.patch(`/economyTipPosts/${editEconomyTip.id}`, editEconomyTip);
};

const deleteEconomyTip = async (economyTip) => {
  await axios.delete(`/economyTipPosts/${economyTip.id}`);
};

export { getEconomyTip, addEconomyTip, patchEconomyTip, deleteEconomyTip };
