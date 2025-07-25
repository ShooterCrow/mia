import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const p = action.payload;
            // console.log(p)
            // state.user = user;
            // state.token = accessToken;
        },
        clearCredentials: (state) => {
            state.user = null;
            state.token = null;
        },
    },
})

export const { setCredentials, clearCredentials } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export default authSlice.reducer;