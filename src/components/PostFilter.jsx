import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

  const options = [
    {name: 'By name', value: 'title'},
    {name: 'By description', value: 'body'},
  ]

  return (
    <div>
      <MyInput
        placeholder="Search"
        value={filter.search}
        onChange={e => setFilter({...filter, search: e.target.value})}
      />
      <MySelect
        options={options}
        defaultValue={'Sort by'}
        select={val => setFilter({...filter, sort: val})}
      />
    </div>
  );
};

export default PostFilter;
