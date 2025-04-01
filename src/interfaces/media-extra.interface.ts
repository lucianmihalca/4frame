// Créditos de una película o serie
export interface ICastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface ICrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface ICredits {
  id: number;
  cast: ICastMember[];
  crew: ICrewMember[];
}

export interface IEpisode {
  id: number;
  name: string;
  overview: string;
  still_path: string | null;
  episode_number: number;
  air_date: string;
}

// Videos
export interface IVideo {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | string;
  type: "Trailer" | "Teaser" | string;
  official: boolean;
  published_at: string;
}

export interface IVideosResponse {
  id: number;
  results: IVideo[];
}
