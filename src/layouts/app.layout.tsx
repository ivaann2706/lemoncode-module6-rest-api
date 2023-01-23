import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import * as classes from './app.layout.styles';
import { linkRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(linkRoutes.characterCollection);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
            <img className={classes.img} src="src/assets/rickandmorty.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
