import React from 'react';
import classes from './MySelect.module.css'


const MySelect = ({options, defaultValue, select}) => {
  return (
    <select className={classes.sel} onChange={(e) => select(e.target.value) } defaultValue="">
      {defaultValue && <option disabled value="">{defaultValue}</option>}
      {options.map((opt, i) => (<option value={opt.value} key={i + 1}>{opt.name}</option>))}
    </select>
  );
};

export default MySelect;
