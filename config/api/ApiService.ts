import axios from "axios";
import { getItem } from "@/config/utils/localStorageControl";

// const authHeader = () => ({
//     Authorization: `Bearer ${getItem("authToken")}`,
// });

const client = axios.create({
    baseURL: "https://a3ca-103-97-166-170.ngrok-free.app/",
});

const mlClient = axios.create({
    baseURL: "https://mindspark-express-backend.onrender.com/api/",
});

class ApiService {
    static get(path = "", params = {}) {
        return client({
            method: "GET",
            url: path,
            // headers: { ...authHeader() },
            params,
        });
    }

    static post(path = "", data = {}, optionalHeader = {}) {
        return client({
            method: "POST",
            url: path,
            data,
            // headers: { ...authHeader(), ...optionalHeader },
        });
    }

    static patch(path = "", data = {}) {
        return client({
            method: "PATCH",
            url: path,
            data: JSON.stringify(data),
            // headers: { ...authHeader() },
        });
    }

    static delete(path = "", data = {}) {
        return client({
            method: "DELETE",
            url: path,
            data: JSON.stringify(data),
            // headers: { ...authHeader() },
        });
    }

    static put(path = "", data = {}) {
        return client({
            method: "PUT",
            url: path,
            data: JSON.stringify(data),
            // headers: { ...authHeader() },
        });
    }
}

export { ApiService };
