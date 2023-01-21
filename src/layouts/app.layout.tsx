import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';

import * as classes from './app.layout.styles';
import { linkRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  const handleNavigate = (linkRoute) => {
    history.push(linkRoute);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img className={classes.img} src="src/assets/rickandmorty.png" />
          <Button color="inherit" onClick={() => handleNavigate(linkRoutes.characterCollection)}>
            Characters
          </Button>
          <Button color="inherit" onClick={() => handleNavigate(linkRoutes.locationCollection)}>
            Locations
          </Button>
          <Button color="inherit" onClick={() => handleNavigate(linkRoutes.episodeCollection)}>
            Episodes
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
