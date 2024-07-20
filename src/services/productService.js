import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET } from "../constants/httpMethod";

export const getProductSearch = createAsyncThunk("searchPro", async ({ searchText }) => {
    const respone = await BASE_URL[GET](`products/search?keyword=${searchText}`);
    return respone;
})