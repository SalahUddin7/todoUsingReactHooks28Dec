import React from 'react';

export default function FormInput() {
  return (
    <form autoComplete="off">
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder=" What item do you need?"
      />
      {/* This input is for Price */}
      <input type="text" required placeholder="Price (estimated)" />

      <button type="submit">Add</button>
    </form>
  );
}
