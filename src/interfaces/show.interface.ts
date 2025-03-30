// Interfaz base común
export interface IMediaBase {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

// Interfaz para series
export interface IShow extends IMediaBase {
  name: string;
  first_air_date: string;
}

// Interfaz para películas
export interface IMovie extends IMediaBase {
  title: string;
  release_date: string;
}

// Interfaz para resultados que pueden ser película o serie
export type IMedia = IMovie | IShow;

// Detalles para series
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

// Interfaz para detalles de películas
export interface IMovieDetails extends IMovie {
  genres: IGenre[];
  homepage: string;
  production_companies: ICompany[];
  runtime: number;
  status: string;
  tagline: string;
  vote_count: number;
  budget: number;
  revenue: number;
}

// Tipo que representa detalles de cualquier medio
export type IMediaDetails = IShowDetails | IMovieDetails;

// Interfaces para componentes de medios
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

// Respuesta API (ahora maneja tanto películas como series)
export interface IApiResponse {
  page: number;
  results: IMedia[];
  total_pages: number;
  total_results: number;
}
