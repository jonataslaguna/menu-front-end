import { API_URL } from "./fetchDataMenu";
import { NewProduct } from "../types/MenuDataType";

export async function postData(endpoint: string, jsonData: NewProduct) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });
    const data = await response.json();
    return data;
}