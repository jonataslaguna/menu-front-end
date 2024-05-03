const API_URL = 'http://localhost:8080';

export async function fetchData (endpoint: string) {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();
    return data;
}