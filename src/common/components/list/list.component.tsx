import * as React from 'react';

import { SearchComponent } from '../search.component';
import * as classes from './list.styles';
import { Pagination } from '@material-ui/lab';

interface Props {
  page: number;
  setPage: (value: number) => void;
  totalPage: number;
  setSearchText: (value: string) => void;
  onDetail?: (id: string) => void;
}

export const ListComponent: React.FunctionComponent<Props> = (props) => {
  const { children, page, setPage, setSearchText, totalPage } = props;

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <SearchComponent setPage={setPage} setSearchText={setSearchText} />
      {!!totalPage && (
        <>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
          <ul className={classes.list}>{children}</ul>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
        </>
      )}
      {!totalPage && <p>"Collection" list not available</p>}
    </div>
  );
};
