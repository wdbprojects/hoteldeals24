import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  user: any;
  isAuthenticated: Boolean;
}

const initialState: IUser = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setIsAuthenticated } = userSlice.actions;
export default userSlice.reducer;
