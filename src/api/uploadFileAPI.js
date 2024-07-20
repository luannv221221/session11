import { BASE_FILE } from ".";
import { POST } from "../constants/httpMethod"

export const uploadFileAPI = async (file) => {
    const respone = await BASE_FILE[POST]("upload", file);
    return respone;
}