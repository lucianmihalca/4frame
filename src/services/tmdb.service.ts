import axios from "axios";
import type {
  IBaseApiResponse,
  IMovie,
  IMovieDetails,
  ITvShow,
  ITvShowDetails,
} from "../interfaces/show.interface";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

export const tmdbService = {
  // MOVIES
  getMoviesPopular: async (page = 1): Promise<IBaseApiResponse<IMovie>> => {
    const response = await tmdbApi.get("/movie/popular", { params: { page } });
    return response.data;
  },

  getMoviesNowPlaying: async (page = 1): Promise<IBaseApiResponse<IMovie>> => {
    const response = await tmdbApi.get("/movie/now_playing", { params: { page } });
    return response.data;
  },

  getMoviesTopRated: async (page = 1): Promise<IBaseApiResponse<IMovie>> => {
    const response = await tmdbApi.get("/movie/top_rated", { params: { page } });
    return response.data;
  },

  getMovieDetails: async (id: number): Promise<IMovieDetails> => {
    const response = await tmdbApi.get(`/movie/${id}`);
    return response.data;
  },

  searchMovies: async (query: string, page = 1): Promise<IBaseApiResponse<IMovie>> => {
    const response = await tmdbApi.get("/search/movie", { params: { query, page } });
    return response.data;
  },

  // TV SHOWS (Series)

  getTvSeriesPopular: async (page = 1): Promise<IBaseApiResponse<ITvShow>> => {
    const response = await tmdbApi.get("/tv/popular", { params: { page } });
    return response.data;
  },

  getTvSeriesDetails: async (id: number): Promise<ITvShowDetails> => {
    const response = await tmdbApi.get(`/tv/${id}`);
    return response.data;
  },

  searchTv: async (query: string, page = 1): Promise<IBaseApiResponse<ITvShow>> => {
    const response = await tmdbApi.get("/search/tv", { params: { query, page } });
    return response.data;
  },
};
