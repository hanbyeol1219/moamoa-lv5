import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditModalOn: false,
  isDeleteModalOn: false,
  isDetailModalOn: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsEditModalOn: (state, action) => {
      state.isEditModalOn = action.payload;
    },
    setIsDeleteModalOn: (state, action) => {
      state.isDeleteModalOn = action.payload;
    },
    setIsDetailModalOn: (state, action) => {
      state.isDetailModalOn = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setIsDeleteModalOn, setIsDetailModalOn, setIsEditModalOn } =
  modalSlice.actions;
