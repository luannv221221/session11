import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authSevice";

export const authSilce = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.data = action.payload.data;
            state.loading = false;
        });
        builder.addCase(login.rejected, (state, acction) => {
            state.loading = false;
            state.error = acction.error
        })
    }
});
export default authSilce.reducer;