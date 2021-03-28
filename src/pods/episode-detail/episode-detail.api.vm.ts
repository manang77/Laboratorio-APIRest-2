import { EpisodeDetailVm } from './episode-detail.vm';
import {
  EpisodeDetailApiModel,
  getEpisodeDetail
} from './api';
import { mapEpisodeFromApiToVM } from './episode-detail.mapper';

export const getEpisode = async (
  id: string
): Promise<EpisodeDetailVm> => {
  const episodeDetailApi: EpisodeDetailApiModel = await getEpisodeDetail(
    id
  );
  const episodeDetailVm: EpisodeDetailVm = await mapEpisodeFromApiToVM(
    episodeDetailApi
  );
  return episodeDetailVm;
};

