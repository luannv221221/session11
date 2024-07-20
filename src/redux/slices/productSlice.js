import { createSlice } from "@reduxjs/toolkit";
import { getProductSearch } from "../../services/productService";

export const productSilce = createSlice({
    name: "product",
    initialState: {
        loading: true,
        products: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProductSearch.pending, (state) => {

            state.loading = true;
        });
        builder.addCase(getProductSearch.fulfilled, (state, action) => {

            state.products = action.payload.data;
            state.loading = false;
        });
        builder.addCase(getProductSearch.rejected, (state, acction) => {
            state.loading = true;
            console.log(acction.error);

        })
    }
});
export default productSilce.reducer;