import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Todo List Example</h3>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => removeTodo(idx)} style={{ marginLeft: 10 }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
