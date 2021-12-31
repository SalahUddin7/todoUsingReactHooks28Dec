import React, { useState, useContext, useRef, useEffect } from 'react';
import { DataContext } from './DataProvider';

export default function FormInput(props) {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const [todoOnChangeName, setTodoOnChangeName] = useState('');
  const [todoOnChangePrice, setTodoOnChangePrice] = useState('');

  // const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const allIncludedData = {
      name: todoOnChangeName,
      price: todoOnChangePrice,
    };

    props.allDataHandlers(allIncludedData);
  };

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   setTodos([...todos, { name: todoName, complete: false }]);
  //   setTodoName('');
  // };

  const onChangeHandlerName = (e) => {
    setTodoOnChangeName(e.target.value);
  };

  const onChangeHandlerPrice = (e) => {
    setTodoOnChangePrice(e.target.value);
  };

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input type="text" onChange={onChangeHandlerName} />

      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder=" Type NOW"
        onChange={onChangeHandlerPrice}
      />

      {/* This input is for Price
      <input type="text" required placeholder="Price (estimated)" /> */}

      <button type="submit">Add</button>
    </form>
  );
}
