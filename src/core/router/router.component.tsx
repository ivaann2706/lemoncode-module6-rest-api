import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene, EpisodeCollectionScene, LocationCollectionScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route exact={true} path={switchRoutes.editCharacter} component={CharacterScene} />
        <Route exact={true} path={switchRoutes.locationCollection} component={LocationCollectionScene} />
        <Route exact={true} path={switchRoutes.episodeCollection} component={EpisodeCollectionScene} />
      </Switch>
    </HashRouter>
  );
};
