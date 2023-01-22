import * as React from 'react';

import { Input } from '@material-ui/core';
import { useDebounce } from 'use-debounce';

interface Props {
  setPage: (value: number) => void;
  setSearchText: (value: string) => void;
}

export const SearchComponent: React.FunctionComponent<Props> = (props) => {
  const { setPage, setSearchText } = props;
  const [text, setText] = React.useState('');
  const [debouncedSearch] = useDebounce(text, 1000);

  React.useEffect(() => {
    setPage(1);
    setSearchText(text);
  }, [debouncedSearch]);

  return <Input placeholder="Search by name…" value={text} onChange={(e) => setText(e.target.value)} />;
};
