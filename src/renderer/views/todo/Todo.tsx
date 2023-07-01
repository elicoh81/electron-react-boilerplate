/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

export default function Todo() {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        setTodos([...todos, input]);
        setInput('');
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo} type="button">
                Add Todo
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={`todo-${index}`}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
