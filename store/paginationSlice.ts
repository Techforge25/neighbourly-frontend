import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
  limit: number;
  totalPages: number;
  totalDocs: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pagingCounter:number
}

const initialState: PaginationState = {
  page: 1,
  limit: 3,
  totalPages: 1,
  totalDocs: 0,
  hasNextPage: false,
  hasPrevPage: false,
  pagingCounter:1
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPaginationData: (state, action: PayloadAction<Partial<PaginationState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPage, setPaginationData } = paginationSlice.actions;
export default paginationSlice.reducer;