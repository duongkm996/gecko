import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Web3 from "web3";

export const connectMetamask = createAsyncThunk(
  "metamask/connect",
  async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      return window.web3;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      return window.web3;
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
);

export const web3Slice = createSlice({
  name: "web3",
  initialState: {} as any,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      connectMetamask.fulfilled,
      (state, action: PayloadAction<any>) => {
        return action.payload;
      }
    );
  },
});

export default web3Slice.reducer;
