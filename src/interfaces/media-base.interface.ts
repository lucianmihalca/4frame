// Estructura común para películas y series
export interface IMediaBase {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

// Elementos compartidos utilizados en los detalles
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
