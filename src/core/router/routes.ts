import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  rickyMortyCharacters: string;
  rickAndMortyCharacterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  rickyMortyCharacters: '/ricky-and-morthy-characters',
  rickAndMortyCharacterDetail: '/ricky-and-morthy-detail/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel' | 'rickAndMortyCharacterDetail'> {
  rickAndMortyCharacterDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  rickAndMortyCharacterDetail: id =>
    generatePath(switchRoutes.rickAndMortyCharacterDetail, { id }),
};
