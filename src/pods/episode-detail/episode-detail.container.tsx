import React from 'react';
import { useParams } from 'react-router-dom';
import { getEpisode } from './episode-detail.api.vm';
import { EpisodeDetailComponent } from './episode-detail.component';
import {
  EpisodeDetailVm,
  getNewEpisodeDetailVm
} from './episode-detail.vm';

interface EpisodeDetailParams {
  id: string;
}

export const EpisodeDetailContainer: React.FC = () => {
  const { id } = useParams<EpisodeDetailParams>();
  const [episodeDetail, setEpisodeDetail] = React.useState<EpisodeDetailVm>(
    getNewEpisodeDetailVm()
  );

  const loadEpisode = async () => {
    const episodeDetailVM: EpisodeDetailVm = await getEpisode(id);
    setEpisodeDetail(episodeDetailVM);
  };

  React.useEffect(() => {
    loadEpisode();
  }, []);

  return (
    <>
      <EpisodeDetailComponent
        episode={episodeDetail}
      />
    </>
  );
};
