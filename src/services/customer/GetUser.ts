import axios from "axios";
import { GetAllData } from "@/types/customer";

export default async function GetUser() {
    try {
        const response = await axios.get<GetAllData>('http://127.0.0.1:8000/api/customer_all');
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
