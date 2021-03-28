interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesApiModel {
  info: Info;
  results: Episode[];
}

export const getNewRickAndMortyApiModel = () => {
  const info: Info = {
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  };
  return {
    info: info,
    results: [],
  };
};
