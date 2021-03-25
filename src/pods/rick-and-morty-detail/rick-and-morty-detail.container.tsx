import React from 'react';
import { useParams } from 'react-router-dom';
import { getRickAndMortyDetailData } from './rick-and-morty-detail.api.vm';
import { RickAndMortyDetailComponent } from './rick-and-morty-detail.component';
import {
  RickAndMortyDetailVm,
  getNewRickAndMortyDetailVm,
} from './rick-and-morty-detail.vm';
import { saveRickAndMortyDetailData } from './rick-and-morty-detail.vm.api';

interface RickAndMortyDetailParams {
  id: string;
}

export const RickAndMortyDetailContainer: React.FC = () => {
  const { id } = useParams<RickAndMortyDetailParams>();
  const [
    rickAndMortyDetailCharacter,
    setRickAndMortyDetailCharacter,
  ] = React.useState<RickAndMortyDetailVm>(getNewRickAndMortyDetailVm());

  const loadRickAndMortyCharacter = async () => {
    const viewModelGitUserData: RickAndMortyDetailVm = await getRickAndMortyDetailData(
      id
    );
    setRickAndMortyDetailCharacter(viewModelGitUserData);
  };

  const updateRickAndMortyCharacter = async (character: RickAndMortyDetailVm) => {
    const updatedCharacter = {...character};
    await saveRickAndMortyDetailData(updatedCharacter);
  }

  React.useEffect(() => {
    loadRickAndMortyCharacter();
  }, []);

  return (
    <>
      <RickAndMortyDetailComponent
        rickAndMortyCharacter={rickAndMortyDetailCharacter}
        updateRickAndMortyCharacter={updateRickAndMortyCharacter}
      />
    </>
  );
};
