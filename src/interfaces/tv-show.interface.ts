import type {
  IMediaBase,
  ICreator,
  IGenre,
  INetwork,
  ICompany,
  ISeason,
} from "./media-base.interface";

// Detalle completo
export interface ITvShow extends IMediaBase {
  name: string;
  first_air_date: string;
}

// Detalle completo
export interface ITvShowDetails extends ITvShow {
  created_by: ICreator[];
  episode_run_time: number[];
  genres: IGenre[];
  homepage: string;
  tagline: string;
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
