import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "186996e07a7fc2a8c3e3f158d59b185e",
        language: "en-US"
    }
});

export default api;