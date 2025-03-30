import axios from "axios";
import type { IApiResponse, IShowDetails } from "@/interfaces/show.interface";

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
  getTvSeriesPopular: async (page: number = 1): Promise<IApiResponse> => {
    const response = await tmdbApi.get<IApiResponse>("/tv/popular", {
      params: { page },
    });

    return response.data;
  },

  getTvSeriesDetails: async (id: number): Promise<IShowDetails> => {
    const response = await tmdbApi.get<IShowDetails>(`/tv/${id}`);
    return response.data;
  },

  searchTv: async (query: string, page: number = 1): Promise<IApiResponse> => {
    const response = await tmdbApi.get<IApiResponse>("/search/tv", {
      params: { query, page },
    });

    return response.data;
  },

  getMoviesPopular: async (page: number = 1): Promise<IApiResponse> => {
    const response = await tmdbApi.get<IApiResponse>("/movie/popular", {
      params: { page },
    });

    return response.data;
  },

  getMovieDetails: async (id: number): Promise<IShowDetails> => {
    const response = await tmdbApi.get<IShowDetails>(`/movie/${id}`);
    return response.data;
  },

  searchMovies: async (query: string, page: number = 1): Promise<IApiResponse> => {
    const response = await tmdbApi.get<IApiResponse>("/search/movie", {
      params: { query, page },
    });

    return response.data;
  },
};
