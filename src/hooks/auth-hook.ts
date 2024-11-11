import { serverUrl } from "@/lib/utils";

export const useAuth = async (username: string, password: string) => {
    // send request to /auth which is a rest api
    try {
        const response = await fetch(serverUrl + '/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        return { message: data.message, data: data.data, response: response.status };
    } catch (err: any) {
        return { message: err.message, response: 400 };
    }
}
