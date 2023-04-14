import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn:false },
    reducers: {
        login(state, payload) {
            state.isLoggedIn = true;
        },
        logout(state, payload) {
            state.isLoggedIn = false;
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice;