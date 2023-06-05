import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserData {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  point: string;
  subscription: string;
  coupon: number;
}

interface Inputs {
  email: string;
  password: string;
}

const asyncUserLogin = createAsyncThunk(
  "userSlice/login",
  async (payload: Inputs) => {
    const res = await axios.post<UserData>(
      "http://localhost:1337/api/auth/local",
      {
        identifier: payload.email,
        password: payload.password,
      }
    );
    return res.data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    jwt: "",
    isLogin: false,
    userData: {},
    status: "",
  },
  reducers: {
    logout: (state, action) => {
      state.status = "";
      state.isLogin = false;
      state.jwt = "";
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUserLogin.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUserLogin.fulfilled, (state, action) => {
      state.status = "complete";
      state.isLogin = true;
      state.jwt = action.payload.jwt;
      state.userData = action.payload.user;
    });
    builder.addCase(asyncUserLogin.rejected, (state, action) => {
      state.status = "fail";
      state.isLogin = false;
      state.jwt = "";
      state.userData = {};
    });
  },
});

export default userSlice;
export const { logout } = userSlice.actions;
export { asyncUserLogin };
