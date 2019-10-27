import React from "react";
function TodoTable({ todos, deleteItem }) {
    return (
        <div>
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
}
export default TodoTable;
