import React from 'react';
import { AppUI } from './AppUI';
import './App.scss';

// const defaultItem = [
//   { text: 'Practica Js', completed: true },
//   { text: 'Aprende React y practica', completed: false },
//   { text: 'Vuelvete experto', completed: false },
//   { text: 'Busca un empleo', completed: false },
// ];

function useLocalStorage(itemName,initialValue) {
  const {loading, setLoading} = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect (() =>{
    setTimeout(() =>{
      const localStorageItem = localStorage.getItem('itemName');
      let parseItem;

      if (!localStorageItem) {
      localStorage.setItem('itemName', JSON.stringify(initialValue));
      parseItem = initialValue;
      } else {
      parseItem = JSON.parse(localStorageItem)
      }
      setItem(parseItem)
      setLoading(false)
    }, 1000)
  })
  
  
  

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem('ItemName', stringifiedItem); 
    setItem(newItem);
};

  return {
    item, 
    saveItem,
    loading,
  }
}

function App() {
  const {
    item:todos,
    saveItem :saveTodos,
    loading,
  } = useLocalStorage('Item_V1', []);

  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTotal = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

    // console.log('Render (antes del use effect)');

    // React.useEffect (() => {
    //   console.log('use effect')
    // }, [totalTotal]);

    // console.log('Render ( luego del use effect)');

  return (
    <AppUI
    loading={loading}
    total={totalTotal}
    completed={completedTodos}

    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  )
}  

export default App;
