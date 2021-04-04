import Axios from 'axios';
import { EpisodeDetailApiModel } from './episode-detail.api.model';
import { CharacterDataApi } from './episode-detail.api.model';


export const getEpisodeDetail = async (
  id: string
): Promise<EpisodeDetailApiModel> => {

  const urlBase = `${process.env.BASE_SERVER_URL}/api/episodes/${id}`;
  const { data } = await Axios.get<
    EpisodeDetailApiModel
  >(urlBase);
  return data;
};


export const getCharacterData = async (
  charactersIds: string
): Promise<CharacterDataApi> => {
  const urlBase = `${process.env.BASE_SERVER_URL}/api/characters/${charactersIds}`;
  const { data } = await Axios.get<CharacterDataApi>(urlBase);
  return data;
}

