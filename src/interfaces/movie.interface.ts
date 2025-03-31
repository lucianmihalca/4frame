import type { IMediaBase, IGenre, ICompany } from "./media-base.interface";

// Vista previa
export interface IMovie extends IMediaBase {
  title: string;
  release_date: string;
}

// Detalle completo
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
