import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initializeEth = createAsyncThunk(
  "dappApp/initializeEth",
  async () => {
    const web3Provider = window.ethereum ? window.ethereum : window.web3;
    const accounts = await web3Provider.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0].toString();
    debugger;
    return { web3Provider, account };
  }
);

const dappAppSlice = createSlice({
  name: "dappApp",
  initialState: {
    web3Provider: null,
    account: "0x0",
    tasks: [
      {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        createdAt: "2020-01-01",
        done: false,
      },
      {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        createdAt: "2020-01-01",
        done: true,
      },
      {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        createdAt: "2020-01-01",
        done: false,
      },
      {
        id: 4,
        title: "Task 4",
        description: "Task 4 description",
        createdAt: "2020-01-01",
        done: true,
      },
    ],
  },
  reducers: {
    initialSetup: (state, action) => {
      const { wallet, tasks } = action.payload;
      state.wallet = wallet;
      state.tasks = tasks;
    },
  },
  extraReducers: {
    [initializeEth.fulfilled]: (state, action) => {
      debugger;
      const { web3Provider, account } = action.payload;
      state.web3Provider = web3Provider;
      state.account = account;
    },
  },
});

export const { initialSetup } = dappAppSlice.actions;

export default dappAppSlice.reducer;
