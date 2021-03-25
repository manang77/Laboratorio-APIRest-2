import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { RickAndMortyScene, RickAndMortyDetailScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.rickyMortyCharacters]}
          component={RickAndMortyScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.rickyMortyCharacters]}
          component={RickAndMortyScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.rickAndMortyCharacterDetail]}
          component={RickAndMortyDetailScene}
        />
      </Switch>
    </HashRouter>
  );
};
