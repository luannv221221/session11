import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../api";
import { POST } from "../constants/httpMethod";
import Cookies from "js-cookie";
export const login = createAsyncThunk("auth/login", async ({ userName, password }) => {


    const respone = await BASE_URL[POST]("auth/login", { userName, password });
    console.log("KQ", respone.data);

    // luu tru lai cai token 
    Cookies.set("token", respone.data.token, { expires: 7 });
    Cookies.set("user", respone.data.fullName, { expires: 7 });
    Cookies.set("role", JSON.stringify(respone.data.roles), { expires: 7 });
    return respone;
})