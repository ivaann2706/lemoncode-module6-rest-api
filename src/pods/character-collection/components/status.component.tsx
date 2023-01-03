import * as React from 'react';

import Avatar from '@material-ui/core/Avatar/Avatar';
import Favorite from '@material-ui/icons/Favorite';
import Clear from '@material-ui/icons/Clear';
import Help from '@material-ui/icons/Help';

import * as classes from './character-card.styles';

interface Props {
  status: string;
}

export const Status: React.FunctionComponent<Props> = (props) => {
  const { status } = props;
  const [color, setColor] = React.useState(null);
  const [icon, setIcon] = React.useState(<Help />);

  React.useEffect(() => {
    if (status === 'Alive') {
      setColor(classes.green);
      setIcon(<Favorite />);
    } else if (status === 'Dead') {
      setColor(classes.red);
      setIcon(<Clear />);
    }
  }, []);

  return (
    <Avatar className={color} aria-label="Character">
      {icon}
    </Avatar>
  );
};
