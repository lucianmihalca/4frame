import axios from "axios";
import type { IBaseApiResponse } from "../interfaces/api-response.interface";
import type { IMovie, IMovieDetails } from "@/interfaces/movie.interface";
import type { ITvShow, ITvShowDetails } from "@/interfaces/tv-show.interface";
import type { ICredits, IVideosResponse } from "@/interfaces/media-extra.interface";

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

  getTvSeriesCredits: async (id: number): Promise<ICredits> => {
    const response = await tmdbApi.get(`/tv/${id}/credits`);
    return response.data;
  },

  getTvSeriesVideos: async (id: number): Promise<IVideosResponse> => {
    const response = await tmdbApi.get(`/tv/${id}/videos`);
    return response.data;
  },
  getTvSeriesSimilar: async (id: number): Promise<IBaseApiResponse<ITvShow>> => {
    const response = await tmdbApi.get(`/tv/${id}/similar`);
    return response.data;
  },

  getTvSeriesRecommendations: async (id: number): Promise<IBaseApiResponse<ITvShow>> => {
    const response = await tmdbApi.get(`/tv/${id}/recommendations`);
    return response.data;
  },

  searchTv: async (query: string, page = 1): Promise<IBaseApiResponse<ITvShow>> => {
    const response = await tmdbApi.get("/search/tv", { params: { query, page } });
    return response.data;
  },
};
