import React, { useState } from "react";

const Todolist = () => {
    const emptyTodo = { desc: "", date: "" };
    const [todo, setTodo] = useState(emptyTodo);
    const [todos, setTodos] = useState([]);

    const inputChanged = event => {
        const eventValue = event.target.value;
        const eventName = event.target.name;
        const todoCopy = { ...todo };
        todoCopy[eventName] = eventValue;
        setTodo(todoCopy);
    };

    const addTodo = event => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo(emptyTodo);
    };

    const deleteItem = index => {
        setTodos([...todos].filter((todo, i) => i !== index));
    };
    return (
        <div>
            <form onSubmit={addTodo}>
                Description:
                <input
                    className="u-margin-small"
                    name="desc"
                    type="text"
                    onChange={inputChanged}
                    value={todo.desc}
                />
                Date:
                <input
                    className="u-margin-small"
                    name="date"
                    type="text"
                    onChange={inputChanged}
                    value={todo.date}
                />
                <input type="submit" value="Add" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Todo Item</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <tr key={i}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <td>
                                <button onClick={() => deleteItem(i)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Todolist;
