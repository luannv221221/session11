
import { BASE_URL_ADMIN } from ".";
import { GET } from "../constants/httpMethod"

export const getAllCategory = async () => {
    const res = await BASE_URL_ADMIN[GET]("admin/categories");
    console.log(res);
}