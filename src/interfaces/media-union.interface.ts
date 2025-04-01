// api-response.interface.ts

import type { IMovie, IMovieDetails } from "./movie.interface";
import type { ITvShow, ITvShowDetails } from "./tv-show.interface";

// Tipos unificados (comunes para uso en vistas genéricas o componentes)
export type IMedia = IMovie | ITvShow;
export type IMediaDetails = IMovieDetails | ITvShowDetails;
