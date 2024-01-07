import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      // const expirationTime = new Date().getTime() + 60 * 1000; // 1 minute (for testing)
      localStorage.setItem("expirationTime", expirationTime);

      // TODO : MAJOR ISSUE : something realted to localstorage => u know. Admin acc
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cart");
      localStorage.removeItem("expirationTime");

      // TODO : maybe better to use localstorage.clear() here, will see in future if needed
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
