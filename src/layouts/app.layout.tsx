import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import * as classes from './app.layout.styles';
import { linkRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img className={classes.img} src="src/assets/rickandmorty.png" />
          <NavLink activeStyle={classes.activeTab} className={classes.inactiveTab} to={linkRoutes.characterCollection}>
            Characters
          </NavLink>
          <NavLink activeStyle={classes.activeTab} className={classes.inactiveTab} to={linkRoutes.locationCollection}>
            Locations
          </NavLink>
          <NavLink activeStyle={classes.activeTab} className={classes.inactiveTab} to={linkRoutes.episodeCollection}>
            Episodes
          </NavLink>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
