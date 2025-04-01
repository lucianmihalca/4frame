import type { IMovieDetails } from "../interfaces/movie.interface";
import type { ITvShowDetails } from "../interfaces/tv-show.interface";
import type { IMedia } from "../interfaces/media-union.interface";

// Detecta si el objeto es una película
export function isMovie(media: IMedia): media is IMovieDetails {
  return "title" in media;
}

// Detecta si el objeto es una serie
export function isTvShow(media: IMedia): media is ITvShowDetails {
  return "name" in media;
}
