import React from 'react';

export default function ListItem({ todo, id, checkComplete }) {
  return (
    <li>
      <label htmlFor={id} className={todo.complete ? 'active' : ''}>
        <input
          type="checkbox"
          id={id}
          checked={todo.complete}
          onChange={() => checkComplete(id)}
        />
        {todo.name}
      </label>
      <button disabled={todo.complete}>Edit</button>
    </li>
  );
}
