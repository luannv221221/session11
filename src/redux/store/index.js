import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import productSilce from "../slices/productSlice";



export default configureStore({
    reducer: {
        auth: authSlice,
        product: productSilce
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
