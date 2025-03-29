import axios from "axios";
import type { IApiResponse, IShowDetails } from "@/interfaces/show.interface";

const API_KEY = "c6aeee577586ba38e487b74dfede5deb";
const BASE_URL = "https://api.themoviedb.org/3";

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
};
