import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getGlobal } from "./apis/apis";
import { Global } from "./types/types";

export const fetchGlobal = createAsyncThunk("coins/fetchGlobal", async () => {
  const response = await getGlobal();
  return response;
});

export const globalSlice = createSlice({
  name: "global",
  initialState: {} as Global,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGlobal.fulfilled,
      (state, action: PayloadAction<Global>) => {
        return { ...state, ...action.payload };
      }
    );
  },
});

export default globalSlice.reducer;
