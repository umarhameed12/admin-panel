import { createSlice } from "@reduxjs/toolkit";

const initialState: { email: string, role: string } = {
    email: "",
    role: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUserData: (state, action) => {
            state.role = action.payload.role;
            state.email = action.payload.email;
        }
    }
})

export const {
    setUserData
} = authSlice.actions

export default authSlice.reducer;