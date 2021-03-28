import { EpisodesVm } from './episodes.vm';
import { EpisodesApiModel, getEpisodes } from './api';
import { mapEpisodesFromApiToVM } from './episodes.mapper';

export const getEpisodesData = async (
  page: number,
  name: string
): Promise<EpisodesVm> => {
  const episodesApi: EpisodesApiModel = await getEpisodes(
    page,
    name
  );
  const episodesVm: EpisodesVm = mapEpisodesFromApiToVM(
    episodesApi
  );
  return episodesVm;
};
