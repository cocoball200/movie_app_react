import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "186996e07a7fc2a8c3e3f158d59b185e",
        language: "en-US"
    }
});

export const moviesApi = {
    upcomming: () => api.get("/movie/upcoming"),
    topRated: () => api.get("/movie/top_rated"),
    nowPlaying: () => api.get("/movie/now_playing"),
    reviews: (id) => api.get(`/movie/${id}/reviews`),
    details: (id) => api.get(`/movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("/search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const TvApi = {
    tvAiringToday: () => api.get("/tv/airing_today"),
    topRated: () => api.get("/tv/top_rated"),
    tvOnTheAir: () => api.get("/tv/on_the_air"),
    reviews: (id) => api.get(`/tv/${id}/reviews`),
    details: (id) => api.get(`/tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("/search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export default api;