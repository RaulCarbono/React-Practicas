import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';


function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="React"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
