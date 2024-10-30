import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL: string = "https://c11159cb39807c7c.mokky.dev";

export type TUser = {
  id: number;
  name: string;
  message: string;
  email: string;
}

type TState = {
  data: TUser[];
}

export const fetchUsers = createAsyncThunk<TUser[]>(
  "users/fetchUsers",
  async () => {
    try {
      const { data } = await axios.get<TUser[]>(
        `${BASE_URL}/users`
      );
      localStorage.setItem("users", JSON.stringify(data));

      return data;
    } catch (error) {
      console.log("Failed to fetch:", error)
      throw error
    }
  }
)

export const addUserAsync = createAsyncThunk(
  "users/addUser",
  async (user: TUser) => {
    try {
      const { data } = await axios.post<TUser>(
        ` ${BASE_URL}/users`,
        user
      )
      return data
    } catch (error) {
      console.log("Failed to add user:", error);
      throw error
    }
  }
);

const initialState: TState = {
  data: JSON.parse(localStorage.getItem("users") || "[]"),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.data.push(action.payload)
        localStorage.setItem("users", JSON.stringify(state.data))
      })
  },
})

export default userSlice.reducer;