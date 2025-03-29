export interface IShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  first_air_date: string;
  popularity: number;
  genre_ids: number[];
}

export interface IShowDetails extends IShow {
  created_by: ICreator[];
  episode_run_time: number[];
  genres: IGenre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: ICompany[];
  seasons: ISeason[];
  status: string;
  type: string;
  vote_count: number;
}

export interface ICreator {
  id: number;
  name: string;
  profile_path: string | null;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface INetwork {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ICompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface IApiResponse {
  page: number;
  results: IShow[];
  total_pages: number;
  total_results: number;
}
