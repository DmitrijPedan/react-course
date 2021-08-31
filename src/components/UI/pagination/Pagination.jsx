import React from 'react';
import classes from './Pagination.module.css';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({total, current, changePage}) => {

  let pages = getPagesArray(total);

  return (
    <div className={classes.pages}>
      {pages.map(number =>
        <span
          key={number}
          className={current === number ? classes.current : classes.page}
          onClick={() => changePage(number)}
        >
          {number}
        </span>
      )}
    </div>
  );
};

export default Pagination;
